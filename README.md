# 白米0kcal

食欲の秋に食べ過ぎをしても真顔でゼロカロリー判定を返すワンページのネタアプリです。

## できること
- 食べ物の名前を入力すると、秋限定のゼロkcal認証メッセージを即座に生成
- 判定履歴を直近5件まで記録し、あとからニヤリと確認
- マテリアルデザインを踏襲した秋色テーマ

## 開発・動作確認
1. Node.js 20系をインストールします（<https://nodejs.org/> の LTS 版でOK）
2. 依存パッケージをインストール:
   ```bash
   npm install
   ```
3. ローカルで起動:
   ```bash
   npm run dev
   ```
   ブラウザで <http://localhost:5173> を開くと確認できます。
4. 本番ビルド生成:
   ```bash
   npm run build
   ```

## GitHub Pages へのデプロイ
1. GitHub に新しいリポジトリを作成し、このディレクトリの中身を push します。
2. `Settings > Pages` でソースを "GitHub Actions" に設定します。
3. main ブランチに push すると、`.github/workflows/deploy.yml` が自動でビルド＆デプロイし、数十秒後に公開URLが発行されます。

必要に応じて `Settings > Pages` に表示される URL を共有すると、無料で誰でもアクセスできるようになります。
