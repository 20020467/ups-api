import {
  BadRequestException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MODULE_OPTIONS_TOKEN } from './jwt-authentication.module-definition';
import { JwtAuthenticationModuleOptions } from './jwt-authentication.interface';
import { Request } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/database/entities/user.entity';

@Injectable()
export class JwtAuthenticationService {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(MODULE_OPTIONS_TOKEN)
    public options: JwtAuthenticationModuleOptions,
    @InjectRepository(Users) private readonly userRepository: Repository<Users>,
  ) {}

  async validateRequest(request: Request) {
    const token = this.extractFromAuthHeaderAsBearerToken(request);

    try {
      const decoded = this.jwtService.verify(token, {
        secret: this.options.secretOrKey,
      });

      request['user'] = decoded;
      return true;
    } catch (error) {
      throw new UnauthorizedException(
        "Your authorization token isn't valid. Please login again!",
      );
    }
  }

  extractFromAuthHeaderAsBearerToken(req: Request) {
    // Parse the injected ID token from the request header.
    const token = req.headers.authorization || '';
    return token.trim().replace('Bearer ', '');
  }

  async generateToken(user: Users) {
    const payload = {
      id: user.id,
    };
    const token = this.generateAccessToken(payload);

    if (!this.verifyRefreshToken(user.refreshToken)) {
      const newRefreshToken = this.generateRefreshToken(payload);
      await this.userRepository.update(user.id, {
        refreshToken: newRefreshToken,
      });

      return { token, refreshToken: newRefreshToken };
    }

    return { token, refreshToken: user.refreshToken };
  }

  public generateAccessToken(payload: object): string {
    return this.jwtService.sign(payload, {
      secret: this.options.secretOrKey,
      expiresIn: this.options.accessTokenExpiredIn,
    });
  }

  public generateRefreshToken(payload: object): string {
    return this.jwtService.sign(payload, {
      secret: this.options.secretOrKey,
      expiresIn: this.options.refreshTokenExpiredIn,
    });
  }

  public verifyAccessToken(accessToken: string) {
    try {
      const payload = this.jwtService.verify(accessToken, {
        secret: this.options.secretOrKey,
      });
      return payload;
    } catch (error) {
      return false;
    }
  }

  public verifyRefreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.options.secretOrKey,
      });
      return payload;
    } catch (error) {
      return false;
    }
  }
}
