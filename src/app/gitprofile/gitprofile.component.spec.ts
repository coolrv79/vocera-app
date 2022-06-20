import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { GitprofileComponent } from './gitprofile.component';
import {VoceraServices} from '../services/vocera-services.service';
import { of } from 'rxjs';


var response = {
  "login": "baba",
  "id": 19088,
  "node_id": "MDQ6VXNlcjE5MDg4",
  "avatar_url": "https://avatars.githubusercontent.com/u/19088?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/baba",
  "html_url": "https://github.com/baba",
  "followers_url": "https://api.github.com/users/baba/followers",
  "following_url": "https://api.github.com/users/baba/following{/other_user}",
  "gists_url": "https://api.github.com/users/baba/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/baba/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/baba/subscriptions",
  "organizations_url": "https://api.github.com/users/baba/orgs",
  "repos_url": "https://api.github.com/users/baba/repos",
  "events_url": "https://api.github.com/users/baba/events{/privacy}",
  "received_events_url": "https://api.github.com/users/baba/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 0,
  "public_gists": 0,
  "followers": 2,
  "following": 1,
  "created_at": "2008-07-31T09:51:54Z",
  "updated_at": "2021-11-19T19:16:51Z"
}

describe('GitprofileComponent', () => {
  let component: GitprofileComponent;
  let fixture: ComponentFixture<GitprofileComponent>;
  let service : VoceraServices

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitprofileComponent ],
      imports:[HttpClientTestingModule],
      providers:[VoceraServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitprofileComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(VoceraServices);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getProfile ',()=>{
    spyOn(service,'getmyProfile').and.returnValues(of(response));
    component.getProfile();
    expect(component).toBeDefined();
  })
});
