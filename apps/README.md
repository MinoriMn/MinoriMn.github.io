# アプリの公開ページ

アプリごとに、次のような公開URLを作成します。

```text
/apps/<app-slug>/privacy/
/apps/<app-slug>/faq/
```

例: `/apps/example-android-app/privacy/`

各プライバシーポリシーは、Google Play Consoleとアプリ内から直接リンクするため、認証をかけずに公開します。本文はアプリの実際のデータ取り扱い、組み込んだSDK、広告・分析・クラッシュレポート、問い合わせ先および更新日を確認してから作成してください。

公開後はルートの `index.html` にポリシー、FAQ、問い合わせ窓口へのリンクを追加します。
