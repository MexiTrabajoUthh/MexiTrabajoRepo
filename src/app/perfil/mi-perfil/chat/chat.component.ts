import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiChatService } from 'src/app/api/api-chat.service';
import { Chat, ChatMensajes } from 'src/app/shared/models/chat.model';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chat: Chat = new Chat();
  mensajes: ChatMensajes[] = [];
  mensaje: ChatMensajes = new ChatMensajes();
  form = new FormGroup({
    mensaje: new FormControl('', [Validators.required])
  });
  constructor(
    private api: ApiChatService,
    private notify: NotificationService
  ) {
    // this.chat.intIdChat = 1;
    this.chat.intIdEmpleado = 1;
    this.chat.intIdUsuario = 1;



  }

  ngOnInit(): void {
  }

  async enviar() {
    if (this.form.valid) {

      
      this.chat.intIdEmpleado = 1;
      var res = await this.api.createChat(this.chat);
      if (res.result) {

        if (this.chat.intIdChat == 0) {
          this.chat.intIdChat = res.data.intIdChat;
        }
        // this.notify.showSuccess("Registro Exitoso");
        this.mensaje = new ChatMensajes();
        this.mensaje.intIdChat = this.chat.intIdChat;
        this.mensaje.intIdMensajeChat = 0;
        this.mensaje.intIdTipoMensaje = 1;
        this.mensaje.varMensaje = this.form.value.mensaje;

        var mensaje1 = await this.api.createChatMenaje(this.mensaje);
        if (mensaje1.result) {


          // this.mensajes.push(this.mensaje);

          this.mensaje = new ChatMensajes();
          this.mensaje.intIdChat = this.chat.intIdChat;
          this.mensaje.intIdMensajeChat = 0;
          this.mensaje.intIdTipoMensaje = 2;
          this.mensaje.varMensaje = 'Estamos trabajando en su respuesta';

          // this.mensajes.push(this.mensaje);
          var mensaje2 = await this.api.createChatMenaje(this.mensaje);
          if (mensaje2.result) {
            this.form.get('mensaje')?.setValue('');
            var msg = await this.api.getMensajes(this.mensaje.intIdChat);
            if(msg.result)
            {
              this.mensajes = msg.data;
            }
          }
        }
      }
      else {
        this.notify.showError("Error");
      }


    }
  }
}
