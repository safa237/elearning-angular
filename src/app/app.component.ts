import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { EmptyComponent } from './pages/empty/empty.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HeaderComponent , SidebarComponent  , HomeComponent , EmptyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' 
})
export class AppComponent {
  title = 'appnest';
  data ={
    name: 'safa',
  }
}
