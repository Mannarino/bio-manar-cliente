import { CanActivateFn, Router } from '@angular/router';
import { MemoryService } from './memory.service';
import { inject } from '@angular/core';

export const accessAdminGuard: CanActivateFn = (route, state) => {
  
  const memoryService = inject(MemoryService);
  const routes= inject(Router);
  const password = memoryService.getPassword();

    // Verificar si la propiedad 'password' tiene una longitud de más de tres letras
    if (password && password.length > 3) {
      return true; // Permitir el acceso si la contraseña cumple con el requisito
    } else {
      routes.navigate(['/home']);
      return false; // Denegar el acceso si la contraseña no cumple con el requisito
    }
};