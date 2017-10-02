import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ShoppingListService} from './services/shoppingList.service';
import {AppRoutingModule} from './app-routing.module';
import {RecipeService} from './services/recipe.service';
import {DataStorageService} from './Shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from './auth/auth.service';
import {AuthGuardService} from './auth/auth-guard.service';
import {RecipeModule} from './recipes/recipe.module';
import {SharedModule} from './Shared/shared.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RecipeModule,
    SharedModule,
    ShoppingListModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
