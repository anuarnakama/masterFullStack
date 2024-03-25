import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent {
  activeRoute = inject(ActivatedRoute);
  userServices = inject(UsersService);
  user!: IUser;

  ngOnInit(): void
  {
    this.activeRoute.params.subscribe(async (params:any) =>{
      const id = params.id;
      try{
        let response = await this.userServices.getById(id);
        this.user = response;
        console.log(response);
      }catch(error)
      {
        console.log(error);
      }

    })
  }

  deleteUser(id:string)
  {
    let response = confirm("Seguro de que deseas borrar al usuario id:"+this.user._id);
    if(response)
    {
      let responseDelete = this.userServices.deleteById(id);

        alert("El usuario id:"+this.user._id + " se ha borrado");
        

    }
  }

}
