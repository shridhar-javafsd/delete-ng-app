import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';

export const socialInterceptor: HttpInterceptorFn = (request, next) => {
  console.log(request);
  // if (request && (request.url.includes('ghost') || request.url.includes('asdf'))) {
  if (request && request.url.includes('ghost')) {
    console.error('Do not search ghosts!');
    const customResponse = new HttpResponse({
      status: 403,
      statusText: 'Do not search ghosts!',
    });
    return of(customResponse);
  }
  return next(request);
};
