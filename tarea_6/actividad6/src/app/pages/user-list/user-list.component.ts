import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { IUser } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { query } from '@angular/animations';
import { IResponse } from '../../interfaces/response.interface';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  arrUsers: IUser[] = [];
  userServices = inject(UsersService);
  activateRoute = inject(ActivatedRoute);

  ngOnInit()
   {

    this.userServices.getAll().subscribe((data: IResponse) => {
      this.arrUsers = data.results;
    });

    // this.activateRoute.queryParams.subscribe((queryParams: any) => {
    //   let search = queryParams.query;

    //   if(search){
    //     this.arrUsers = this.userServices.getByLastNameContain(search);
    //   }
    //   else{
    //      this.userServices.getAll().subscribe((data: IUser[]) => {
    //       this.arrUsers = data;
    //     });
    //   }
    // })
  }

}
