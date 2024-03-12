import { Provider } from '@angular/core';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SocialInterceptor } from './social.interceptor';

export const socialInterceptorProvider: Provider = [
    { provide: HTTP_INTERCEPTORS, useClass: SocialInterceptor, multi: true }
];