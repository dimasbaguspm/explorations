{pkgs, ...}: let
  # NOTE - this is a script that is run by devenv to set up the environment
  # before running `devenv up` command ensure to change the environment variables below
  env = {
    DB_USER = "user";
    DB_PASS = "pass";
    DB_PORT = 5432;
    DB_HOST = "localhost";
    DB_NAME = "explorations";
    DATABASE_URL = "postgres://${env.DB_USER}:${env.DB_PASS}@${env.DB_HOST}:${toString env.DB_PORT}/${env.DB_NAME}";

    APP_PORT = 3030;
    APP_DOMAIN = "dimasbaguspm.com";
  };
in {
  cachix = {
    enable = false;
  };

  packages = [
    pkgs.nodejs_22
  ];

  env = env;

  services = {
    postgres = {
      enable = true;
      package = pkgs.postgresql_16;
      initialDatabases = [
        {
          name = env.DB_NAME;
          user = env.DB_USER;
          pass = env.DB_PASS;
        }
      ];
      listen_addresses = env.DB_HOST;
      port = env.DB_PORT;
    };
  };
}
