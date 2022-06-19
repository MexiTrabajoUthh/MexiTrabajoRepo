import { Injectable } from '@angular/core';
   
import { ToastrService } from 'ngx-toastr';
   
@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  title = "Portal Empleos";
  constructor(private toastr: ToastrService) { }
  
  showSuccess(message:string){
      this.toastr.success(message, this.title)
  }
   
  showError(message:string ){
      this.toastr.error(message, this.title)
  }
   
  showInfo(message: string){
      this.toastr.info(message, this.title)
  }
   
  showWarning(message:string){
      this.toastr.warning(message, this.title)
  }
   
}