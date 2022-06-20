import { TestBed } from '@angular/core/testing';

import { VoceraServices } from './vocera-services.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { Component } from '@angular/core';

describe('VoceraServices', () => {
  let service: VoceraServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(VoceraServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call getmyprofile',()=>{
    service.getmyProfile('rohit');
    expect(service).toBeDefined();
  })
});
