import { HttpInterceptorFn } from '@angular/common/http';
import { Injectable } from '@angular/core';
export const exampleInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
