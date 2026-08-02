# Cloudflare Access 設定手順

このリポジトリでは、公開するアプリ情報をルートと `/apps/` に置き、既存ポートフォリオを `/portfolio/` に分離しています。Cloudflare Accessは `/portfolio/*` のみを保護し、プライバシーポリシーには適用しません。

## 前提条件

- GitHub Pagesに独自ドメインを設定できること
- そのドメインのDNSをCloudflareで管理できること
- Cloudflare Zero Trustを利用できること

GitHub Pagesだけで閲覧時の安全なパスワード照合はできません。`.env`、GitHub ActionsのSecrets、HTMLまたはJavaScriptにパスワードを置かないでください。

## 1. 独自ドメインをCloudflareで有効化する

1. Cloudflareダッシュボードの **Websites > Add a domain** で、取得した独自ドメインのルートドメインを追加します。
2. ドメイン取得サービスの管理画面で、Cloudflareから提示されたネームサーバーへ変更します。
3. Cloudflareダッシュボードで対象ゾーンの状態が **Active** になるまで待ちます。

`workers.dev` はCloudflare Workers用の開発ドメインであり、GitHub Pagesを保護する今回の設定には使用しません。Accessのドメイン一覧に `kamemaru2011.workers.dev` しか表示されない場合、独自ドメインのゾーンが未追加・未有効化であるか、Zero Trustとは別のCloudflareアカウントに追加されています。

## 2. GitHub Pagesと独自ドメインを接続する

1. GitHubリポジトリの **Settings > Pages** で、現在の公開ブランチを確認します。
2. **Custom domain** に、CloudflareでActiveになった独自ドメインを入力します。
3. Cloudflare DNSで、GitHub Pagesの案内に従ってそのドメインのDNSレコードを設定します。
4. GitHub PagesのHTTPSを有効にします。
5. CloudflareのSSL/TLS暗号化モードは、GitHub Pagesの証明書が有効になった後で **Full (strict)** にします。

## 3. ポートフォリオをAccessで保護する

1. Cloudflare Zero Trustの **Access > Applications** で **Add an application** を選び、種類に **Self-hosted** を選択します。
2. **Add public hostname** で、Activeになった独自ドメインを選択し、Pathを `/portfolio/*` にします。
3. Allowポリシーを作り、利用者本人のメールアドレスを指定します。
4. ログイン方式にはOne-time PIN、または利用中のGoogle/GitHub IdPを指定します。
5. 作成後、未認証のブラウザで `https://<domain>/portfolio/` を開き、Accessの認証画面になることを確認します。

共有パスワードより、メールアドレス単位の認証の方が、漏えい時の影響を限定でき、許可の取り消しも容易です。

## 4. 公開ページを確認する

次のURLはAccessの対象に含めません。

- `https://<domain>/`
- `https://<domain>/apps/<app-slug>/privacy/`

シークレットウィンドウで上記が認証なしに開けること、`/portfolio/` とその下の画像・CSS・JavaScriptが認証を要求することを確認します。プライバシーポリシーのURLは、Google Play Consoleとアプリ内の両方からこの公開URLへ直接リンクします。
