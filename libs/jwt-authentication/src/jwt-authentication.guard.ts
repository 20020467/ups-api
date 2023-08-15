import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { JwtAuthenticationService } from './jwt-authentication.service';
import { IS_PUBLIC_KEY } from 'libs/decorators/public.decorator';

@Injectable()
export class JwtAuthenticationGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @Inject(JwtAuthenticationService)
    private readonly jwtAuthenticationService: JwtAuthenticationService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true;

    /* -------------------------------------------------------------------------- */
    /*                     You can implement custom logic here                    */
    /* -------------------------------------------------------------------------- */
    /* -------------------------------------------------------------------------- */
    /*                              End custom logic                              */
    /* -------------------------------------------------------------------------- */
    await this.jwtAuthenticationService.validateRequest(request);

    return true;
  }
}
