# Environment files encrypted with SOPS + Age

This directory should include .env files that are encrypted with SOPS using age

## How to set up

### Preparation

- Install SOPS cli ( https://github.com/getsops/sops )
- Install age cli ( Usually in Linux repositories. https://github.com/FiloSottile/age )

- Generate age keys (for SOPS usage)
  - `mkdir -p $HOME/.config/sops/age/` (This is the default place where SOPS looks for decryption key)
  - `age-keygen -o $HOME/.config/sops/age/keys.txt`

### Creating encrypted env file

- Create the environment file you need for the app. In this example environments/production.env
- Check your age public key
  - `cat $HOME/.config/sops/age/keys.txt`
  - Note the public key after text '# public key: '
- Encrypt with command:
  - in directory 'environments'
  - `sops encrypt --age age1r0py886n9cxfr8fq38plfj65thjgwrjxmw78aqduv07uuz4rzcvqswgxgn production.env > production.sops-encrypted.env` (use your own public key here)

- Commit that encrypted file (e.g. production.sops-encrypted.env) into Git.

### Decrypt env file

When you need to decrypt SOPS encrypted env file, make sure you have SOPS and Age installed and you have corresponding Age keys.txt file at $HOME/.config/sops/age/keys.txt

Decrypt with command:   
`sops decrypt production.sops-encrypted.env > production.env`

### Github actions

In this example Github actions 'container-deploy.yml' workflow copies encrypted file to the application server. It assumes that application server where this application is being deployed has sops and age installed and $HOME/.config/sops/age/keys.txt (for 'deploy' user) exists.
