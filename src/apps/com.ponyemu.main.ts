import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.ponyemu.main',
  name: '小马模拟器',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: '[text*="跳过"][text.length<=10]',
      snapshotUrls: [
        'https://i.gkd.li/import/12783200',
        'https://i.gkd.li/import/13759413',
      ],
    },
  ],
});
