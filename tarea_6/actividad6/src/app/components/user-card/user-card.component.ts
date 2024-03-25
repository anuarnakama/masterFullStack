import { Component, inject, Input } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
 @Input() myUser!: IUser;

 userServices = inject(UsersService);


 deleteUser(id:string)
{
  let response = confirm("Seguro de que deseas borrar al usuario id:"+id);
  if(response)
  {
    let responseDelete = this.userServices.deleteById(id);

      alert("El usuario id:"+id + " se ha borrado");
      

  }
}
}

