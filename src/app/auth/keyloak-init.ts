import { from as fromPromise } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';
import { switchMap } from 'rxjs/operators';

import { SettingService } from '../setting.service';

export function initializeKeycloak(
  keycloak: KeycloakService,
  settingService: SettingService
) {
  // console.log('initializeKeycloak.settingService.', settingService.getConfigFile());
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'myrealm',
        clientId: 'angular-keycloak',
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
    });

  // return () =>
  //   settingService.getConfig().pipe(
  //     switchMap<any, any>((config) => {
  //       return fromPromise(
  //         keycloak.init({
  //           config: {
  //             url: config['KEYCLOAK_URL'] + '/auth',
  //             realm: config['KEYCLOAK_REALM'],
  //             clientId: config['KEYCLOAK_CLIENT_ID'],
  //           },
  //         })
  //       );
  //     })
  //   );

}
