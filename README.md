# 🎸 Music Log

自分の音楽練習を記録して、日々の成長を振り返るアプリ

## 概要

Music Logは、個人で使用する音楽練習記録アプリです。
日々の練習内容や練習時間を記録し、過去の練習を振り返ることができます。

## 開発背景

ギターの練習を続ける中で、どのくらい練習したのか、
何を練習したのかを記録し、成長を振り返りたいと思い開発しました。

## 主な機能

- 練習記録の登録
- 練習記録の一覧表示
- 練習記録の削除
- 練習日・練習時間・練習内容・メモの管理

## 使用技術

### フロントエンド
- React
- Vite
- JavaScript

### バックエンド
- Java
- Spring Boot

### データベース
- MySQL

## 開発環境

- Visual Studio Code
- Git
- GitHub

## 起動方法

### バックエンド

1. MySQLを起動する
2. Spring Bootアプリケーションを起動する

### フロントエンド

1. frontendフォルダでターミナルを開く
2. npm installを実行する
3. npm run devを実行する
4. 表示されたURLにアクセスする

## 今後の改善予定

- 練習記録の編集機能
- 練習時間の集計機能
- 練習履歴の振り返り機能
## データベース構成

練習記録を管理するテーブルを使用しています。

| カラム | 内容 |
|---|---|
| id | 練習記録ID |
| practice_date | 練習日 |
| duration | 練習時間（分） |
| content | 練習内容 |
| memo | メモ |

## 画面イメージ
![Music Logの画面](screenshots/music-log-main.jpg)
![練習記録一覧](screenshots/music-log-list.jpg)