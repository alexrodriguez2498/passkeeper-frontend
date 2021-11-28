import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
            import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'notes',
        loadChildren: () =>
            import('./notes/notes.module').then(m => m.NotesModule)
      },
      {
        path: 'passwords',
        loadChildren: () =>
            import('./passwords/passwords.module').then(m => m.PasswordsModule)
      },
      {
        path: 'addresses',
        loadChildren: () =>
            import('./addresses/addresses.module').then(m => m.AddressesModule)
      },
      {
        path: 'payment-cards',
        loadChildren: () =>
            import('./payment-cards/payment-cards.module').then(m => m.PaymentCardsModule)
      },
      {
        path: 'bank-accounts',
        loadChildren: () =>
            import('./bank-accounts/bank-accounts.module').then(m => m.BankAccountsModule)
      },
      {
        path: 'passport-documents',
        loadChildren: () =>
            import('./passport-documents/passport-documents.module').then(m => m.PassportDocumentsModule)
      },
      // {
      //   path: 'messaging-accounts',
      //   loadChildren: () =>
      //       import('./messaging-accounts/messaging-accounts.module').then(m => m.MessagingAccountsModule)
      // },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'builder',
        loadChildren: () =>
          import('./builder/builder.module').then((m) => m.BuilderModule),
      },
      {
        path: 'ecommerce',
        loadChildren: () =>
          import('../modules/e-commerce/e-commerce.module').then(
            (m) => m.ECommerceModule
          ),
      },
      {
        path: 'user-management',
        loadChildren: () =>
          import('../modules/user-management/user-management.module').then(
            (m) => m.UserManagementModule
          ),
      },
      {
        path: 'account-settings',
        loadChildren: () =>
          import('../modules/user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
      },
      {
        path: 'ngbootstrap',
        loadChildren: () =>
          import('../modules/ngbootstrap/ngbootstrap.module').then(
            (m) => m.NgbootstrapModule
          ),
      },
      {
        path: 'wizards',
        loadChildren: () =>
          import('../modules/wizards/wizards.module').then(
            (m) => m.WizardsModule
          ),
      },
      {
        path: 'material',
        loadChildren: () =>
          import('../modules/material/material.module').then(
            (m) => m.MaterialModule
          ),
      },
      {
        path: 'security-dashboard',
        loadChildren: () =>
            import ('./security-dashboard/security-dashboard.module').then(
                (m) => m.SecurityDashboardModule
            )
      },
      {
        path: 'sharing-center',
        loadChildren: () =>
            import ('./sharing-center/sharing-center.module').then(
                (m) => m.SharingCenterModule
            )
      },
      {
        path: 'emergency-access',
        loadChildren: () =>
            import ('./emergency-access/emergency-access.module').then(
                (m) => m.EmergencyAccessModule
            )
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'error/404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
