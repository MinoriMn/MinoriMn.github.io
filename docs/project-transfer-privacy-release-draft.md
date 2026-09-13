# Project transfer privacy-policy release draft

## Status

This release draft records the disclosure for the project export and import feature. The
corresponding Japanese, English, Simplified Chinese, Spanish, Korean, Brazilian Portuguese,
German, and Indonesian disclosures are now published in `index.html` for the feature release.
Keep this file as the review record and compare it with the shipping build and the published
localized text whenever the transfer format or destinations change.

Compare this draft with the shipping build, the Google Play Data safety form, and the in-app
disclosure before each release. Do not publish or ship the feature if the app uploads,
synchronizes, analyzes, or automatically shares project packages without the user's explicit
action.

## Japanese copy

Add the following entries to section 2, "端末内で取り扱うデータ".

```html
<dt>プロジェクトのエクスポートとインポート</dt>
<dd>ユーザーが選択した場合、本アプリはプロジェクト構成、壁紙とディスプレイケースで使用する画像・動画、関連する設定を、パスフレーズで暗号化した単一ファイルとして端末内へ出力または本アプリへ読み込みます。パスフレーズは保存、送信、復旧されません。開発者はこのファイルや含まれるデータを受領しません。</dd>
```

Add the following paragraph after section 2.

```html
<section>
	<h2>2.1 エクスポートしたファイルの共有</h2>
	<p>保存先、共有先、アップロード先はユーザーが Android のシステム画面で選択します。本アプリはユーザーの明示的な操作なしにファイルを送信または同期しません。共有またはアップロードした後のファイルの取扱いは、選択したサービスまたは受信者のプライバシーポリシーと設定に従います。ファイルを共有する前に、含まれる画像・動画およびその他のコンテンツを共有する権利があることを確認してください。</p>
</section>
```

Add this item to section 6.

```html
<li>エクスポートしたファイルは、保存先または共有先からユーザー自身で削除してください。アプリのデータ消去またはアンインストールによって、アプリ外へ保存・共有したファイルは削除されません。</li>
```

## English copy

Add the following entries to section 2, "Data handled on your device".

```html
<dt>Project export and import</dt>
<dd>When you choose to do so, the App exports to your device or imports into the App a single passphrase-encrypted file containing your project structure, images and videos used by wallpapers and Display Case, and related settings. The passphrase is not stored, transmitted, or recoverable. The Developer does not receive this file or the data it contains.</dd>
```

Add the following paragraph after section 2.

```html
<section>
	<h2>2.1 Sharing exported files</h2>
	<p>You choose a save location, sharing destination, or upload destination through Android system screens. The App does not send or synchronize files without your explicit action. After you share or upload a file, its handling is governed by the privacy policy and settings of the service or recipient you choose. Before sharing, make sure you have the right to share the images, videos, and other content it contains.</p>
</section>
```

Add this item to section 6.

```html
<li>Delete exported files yourself from the location or service where you saved or shared them. Clearing App data or uninstalling the App does not delete files saved or shared outside the App.</li>
```

## Required localized equivalents

The published policy supports Simplified Chinese, Spanish, Korean, Brazilian Portuguese, German,
and Indonesian in addition to Japanese and English. Before release, apply semantically equivalent,
reviewed translations to each corresponding language panel. The translations must retain all of the
following facts:

1. Export and import occur only when the user chooses the action.
2. The package can contain project structure, wallpaper and Display Case images/videos, and settings.
3. The package is encrypted with a passphrase that is neither stored nor transmitted and cannot be recovered.
4. The Developer does not receive package contents.
5. The user selects the destination using Android system UI; there is no automatic sending or synchronization.
6. The chosen destination's or recipient's policy governs data after sharing.
7. The user is responsible for deleting exported copies and for having rights to share the included content.
8. The App and Developer do not review or guarantee content rights; users are responsible, to the
   extent permitted by applicable law, for issues arising from their use, sharing, or uploading of
   content.
