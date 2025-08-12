import React from 'react';
import SafetyCard from './SafetyCard';
import SafetyList from './SafetyList';

export default function BasicSafetyTab(): React.JSX.Element {
  const preparationItems = [
    '天気予報・海況の確認',
    'ライフジャケットの着用（必須）',
    '釣行計画の家族への連絡',
    '携帯電話の充電確認',
    '応急処置用品の携帯'
  ];

  const rulesItems = [
    '単独釣行は避ける',
    '滑りやすい場所は避ける',
    '波の状況を常に確認',
    '無理な移動はしない',
    '暗くなる前に帰る'
  ];

  const equipmentItems = [
    'ライフジャケット（必須）',
    '滑り止めシューズ',
    'ヘッドライト・懐中電灯',
    '防寒・防水着',
    '救急セット'
  ];

  const communicationItems = [
    '携帯電話の防水対策',
    '予備バッテリーの携帯',
    '緊急連絡先の確認',
    '位置情報の共有設定',
    '帰宅予定時刻の連絡'
  ];

  return (
    <div>
      <h2 className="tab-title">📋 基本的注意事項と装備</h2>
      
      <div className="content-grid-2">
        <SafetyCard variant="blue" icon="🌊" title="出発前の準備">
          <SafetyList items={preparationItems} variant="safety" />
        </SafetyCard>

        <SafetyCard variant="green" icon="⚡" title="釣り場での基本ルール">
          <SafetyList items={rulesItems} />
        </SafetyCard>

        <SafetyCard variant="yellow" icon="🎣" title="必携装備">
          <SafetyList items={equipmentItems} variant="safety" />
        </SafetyCard>

        <SafetyCard variant="purple" icon="📱" title="連絡手段の確保">
          <SafetyList items={communicationItems} />
        </SafetyCard>
      </div>
    </div>
  );
}
