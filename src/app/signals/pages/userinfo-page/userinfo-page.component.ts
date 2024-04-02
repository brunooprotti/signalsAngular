import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './userinfo-page.component.html',
  styleUrls: ['./userinfo-page.component.css']
})
export class UserinfoPageComponent implements OnInit {

  private usersService = inject(UsersService);
  public userId = signal(1);

  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);
  public fullName = computed<string>( ()=>{
    if ( !this.currentUser() ) return 'Usuario no encontrado';

    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`

  });

  ngOnInit(): void {

  }

  loadUser(id : number){
    if (id <= 0) return;

    this.userId.set(id);

    this.currentUser.set(undefined);

    this.usersService.getUserById(this.userId())
      .subscribe({
        next: (user) => {
          this.currentUser.set(user)
          this.userWasFound.set(true);
        },
        error: (error) => {
          this.userWasFound.set(false);
          this.currentUser.set(undefined);
        }
      });

  }
}
