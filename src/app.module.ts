import { BrowserModule } from '@angular/platform-browser';
                    import { NgModule } from '@angular/core';
                    import { ReactiveFormsModule } from '@angular/forms';
                    import { FormsModule } from '@angular/forms';
                    import { AppComponent } from './app.component';
                    import { MainAppComponent } from './app-area.component';
                    @NgModule({
                      declarations: [AppComponent, MainAppComponent],
                      imports: [BrowserModule, ReactiveFormsModule, FormsModule],
                      providers: [],
                      bootstrap: [AppComponent]
                    })
                    export class AppModule { }