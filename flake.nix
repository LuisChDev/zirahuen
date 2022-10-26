{
  description = "Zirahuen's expo environment (with Android)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-22.05";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config = {
            android_sdk.accept_license = true;
          };
        };

      in {
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [ androidenv.androidPkgs_9_0.androidsdk ];

        };
      });
}
