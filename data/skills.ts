export interface Skill {
  title: string
  description: string
  useYear: number
  icon: string
  color: string
}

export const skills: Skill[] = [
  { title: 'Java', description: '業務系アプリのバックエンド開発。Oracle, MySQL, PostgreSQL を使用。J2EE を用いた API 構築で Guava や JUnit を活用。', useYear: 5, icon: 'pi pi-server', color: '#f89820' },
  { title: 'C, MFC', description: '解析アプリケーションの保守で使用。C#と接続するためにCRLを使ったりもしていた。', useYear: 3, icon: 'pi pi-cog', color: '#659ad2' },
  { title: 'PHP, Vue', description: 'フロントエンド開発の主担当（PHP:2割, Vue:8割）。直近は、新規プロダクトの開発基盤構築、ライブラリ選定、設計、実装（一部ユニットテスト）を担当。使用技術: ESLint, Prettier, Vue3, vee-validate, zod, ky, vitest', useYear: 6, icon: 'pi pi-code', color: '#42b883' },
  { title: 'Perl', description: '半導体企業でのテキスト操作で使用。', useYear: 5, icon: 'pi pi-file-edit', color: '#39457e' },
  { title: 'Python', description: 'Django を使った WebAPI プロトタイプ作成や、個人プロジェクト（Twitter Bot）で使用。', useYear: 1, icon: 'pi pi-bolt', color: '#3776ab' },
]
