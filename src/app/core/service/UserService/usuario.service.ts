import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/api/usuarios';

  private isLoggedIn = false;
  private userRole: string | null = null;

  constructor(private http: HttpClient) {}

  // PETICIONES HTTP
  obtenerUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  crearUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, usuario);
  }

  // AUTENTICACIÓN (Simulada)
  login(usuario: any): boolean {
    // Aquí iría la lógica real con HTTP + JWT
    if (usuario.email && usuario.password) {
      this.isLoggedIn = true;
      this.userRole = 'admin'; // Simulación
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userRole = null;
  }

  estaAutenticado(): boolean {
    return this.isLoggedIn;
  }

  getRol(): string | null {
    return this.userRole;
  }
}
