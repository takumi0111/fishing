'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import '@/styles/fish-info.css';

type Season = '春' | '夏' | '秋' | '冬';
type Location = '堤防' | '磯・防波堤' | '岸壁' | 'サーフ' | '河口' | '船';

interface FishData {
  id: string;
  name: string;
  image: string;
  difficulty: number;
  seasons: Season[];
  locations: Location[];
  size: string;
  bestTime: string;
  bait: string;
  description: string;
  tips: string;
  ecology: string;
}

export default function FishInfo(): React.JSX.Element {
  const [selectedSeason, setSelectedSeason] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // 魚の情報データ
  const fishData: FishData[] = [
    {
      id: 'aji',
      name: 'アジ',
      image: '🐟',
      difficulty: 2,
      seasons: ['春', '夏', '秋'],
      locations: ['堤防', '磯・防波堤', '船'],
      size: '15-30cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: 'サビキ、イソメ、小魚',
      description: 'サビキ釣りで手軽に釣れる初心者向けの魚。群れで行動するため、群れを見つければ数釣りが楽しめる。',
      tips: 'コマセを効かせてサビキ釣りが基本。群れの回遊時間を狙う。',
      ecology: '回遊魚で春から秋にかけて沿岸部に接岸。産卵期は特に活発。'
    },
    {
      id: 'saba',
      name: 'サバ',
      image: '🐟',
      difficulty: 3,
      seasons: ['春', '夏', '秋'],
      locations: ['堤防', '岸壁', '船'],
      size: '20-40cm',
      bestTime: '朝マズメ',
      bait: 'サビキ、小魚、ジグ',
      description: '回遊魚で群れで行動。アジと一緒に釣れることも多い。引きが強く楽しい魚。',
      tips: 'アジより深い層を泳ぐ。サビキの針を大きめにして狙う。',
      ecology: '青物の代表格。回遊性が強く、時期により接岸する。'
    },
    {
      id: 'iwashi',
      name: 'イワシ',
      image: '🐟',
      difficulty: 1,
      seasons: ['春', '夏', '秋'],
      locations: ['堤防', '岸壁'],
      size: '10-15cm',
      bestTime: '早朝',
      bait: 'サビキ、コマセ',
      description: '最も釣りやすい魚の一つ。大群で回遊するため数釣りが楽しめる。',
      tips: '小さめのサビキ針で狙う。群れを見つけたら手返し良く釣る。',
      ecology: '大群で回遊する小魚。他の魚のエサにもなる重要な魚種。'
    },
    {
      id: 'mebaru',
      name: 'メバル',
      image: '🐟',
      difficulty: 2,
      seasons: ['春', '冬'],
      locations: ['堤防', '磯・防波堤', 'サーフ', '船'],
      size: '15-25cm',
      bestTime: '夜間・夜明け前',
      bait: 'イソメ、エビ、ワーム',
      description: '夜行性の根魚。繊細なアタリが特徴で、ゲーム性の高い釣りが楽しめる。',
      tips: '夜釣りが基本。ゆっくりとした誘いで根周りを狙う。',
      ecology: '岩礁帯に住む根魚。春の産卵期は浅場に移動。'
    },
    {
      id: 'kasago',
      name: 'カサゴ',
      image: '🐟',
      difficulty: 2,
      seasons: ['春', '夏', '秋', '冬'],
      locations: ['堤防', '磯・防波堤', '岸壁', '河口', '船'],
      size: '15-25cm',
      bestTime: '一日中',
      bait: 'イソメ、エビ、小魚',
      description: '一年中釣れる根魚の代表格。初心者でも釣りやすく、食味も良い。',
      tips: '根の際を丁寧に探る。根掛かりに注意して釣る。',
      ecology: '岩礁帯の穴に住む根魚。縄張り意識が強く、同じ場所にいることが多い。'
    },
    {
      id: 'kisu',
      name: 'キス',
      image: '🐟',
      difficulty: 2,
      seasons: ['春', '夏', '秋'],
      locations: ['堤防', 'サーフ', '船'],
      size: '15-25cm',
      bestTime: '昼間',
      bait: 'イソメ、エビ',
      description: '砂地の底に住む魚。投げ釣りの代表的なターゲット。上品な食味。',
      tips: '投げ釣りで広範囲を探る。底を這わせるように誘う。',
      ecology: '砂地を好む魚。暖かくなると浅場に移動して活発になる。'
    },
    {
      id: 'tai',
      name: 'マダイ',
      image: '🐟',
      difficulty: 3,
      seasons: ['春', '秋'],
      locations: ['船', '磯・防波堤'],
      size: '30-60cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: 'エビ、イカ、小魚',
      description: '魚の王様とも呼ばれる高級魚。引きが強く、釣り応えのある魚。',
      tips: '警戒心が強いため、細いハリスを使用。潮の流れを読んで狙う。',
      ecology: '深場から浅場まで幅広く生息。産卵期は特に浅場に移動。'
    },
    {
      id: 'suzuki',
      name: 'スズキ',
      image: '🐟',
      difficulty: 3,
      seasons: ['夏', '秋'],
      locations: ['堤防', '河口', 'サーフ', '船'],
      size: '40-80cm',
      bestTime: '夜間・朝マズメ',
      bait: 'ルアー、エビ、小魚',
      description: 'ルアーフィッシングの人気ターゲット。都市部の河川でも狙える。',
      tips: 'ルアーで狙うのが一般的。潮の変化時を狙う。',
      ecology: '汽水域を好み、河川と海を行き来する。夜行性が強い。'
    },
    {
      id: 'aorika',
      name: 'アオリイカ',
      image: '🦑',
      difficulty: 3,
      seasons: ['春', '秋'],
      locations: ['堤防', '磯・防波堤', '船'],
      size: '20-40cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: 'エギ、活き餌',
      description: 'エギングの代表的なターゲット。食味抜群で人気が高い。',
      tips: 'エギを使ったエギングが主流。しゃくりのアクションが重要。',
      ecology: '藻場を好み、産卵期は浅場に移動。知能が高い軟体動物。'
    },
    {
      id: 'hirame',
      name: 'ヒラメ',
      image: '🐟',
      difficulty: 4,
      seasons: ['秋', '冬'],
      locations: ['サーフ', '船'],
      size: '30-60cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: 'ルアー、活き餌',
      description: '高級魚の代表格。サーフからの釣りで人気。引きが強く食味も最高。',
      tips: 'ルアーのただ巻きが基本。底付近をゆっくり誘う。',
      ecology: '砂地の底に潜む座布団型の魚。小魚を狙って浅場に出てくる。'
    },
    {
      id: 'karei',
      name: 'カレイ',
      image: '🐟',
      difficulty: 2,
      seasons: ['春', '冬'],
      locations: ['堤防', 'サーフ', '船'],
      size: '20-40cm',
      bestTime: '昼間',
      bait: 'イソメ、エビ',
      description: '投げ釣りの代表的なターゲット。ヒラメとは逆向きで見分けられる。',
      tips: '遠投してゆっくり待つ。底を這わせる釣り方が効果的。',
      ecology: '砂泥底を好む。ヒラメより深い場所に生息することが多い。'
    },
    {
      id: 'buri',
      name: 'ブリ',
      image: '🐟',
      difficulty: 4,
      seasons: ['秋', '冬'],
      locations: ['船', '磯・防波堤'],
      size: '60-100cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: 'ルアー、活き餌、カット餌',
      description: '青物の王様。強烈な引きで釣り人を魅了する高級魚。',
      tips: '大型のルアーやジグで狙う。強いタックルが必要。',
      ecology: '回遊性の青物。成長段階で呼び名が変わる出世魚。'
    },
    {
      id: 'hamachi',
      name: 'ハマチ',
      image: '🐟',
      difficulty: 3,
      seasons: ['春', '夏', '秋'],
      locations: ['船', '磯・防波堤'],
      size: '40-60cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: 'ルアー、活き餌、カット餌',
      description: 'ブリの若魚。引きが強く食味も良い人気のターゲット。',
      tips: 'ジギングやルアー釣りが人気。群れを見つけることが重要。',
      ecology: 'ブリの成長段階の一つ。回遊性が強く季節により移動。'
    },
    {
      id: 'kanpachi',
      name: 'カンパチ',
      image: '🐟',
      difficulty: 4,
      seasons: ['夏', '秋'],
      locations: ['船', '磯・防波堤'],
      size: '50-80cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: 'ルアー、活き餌',
      description: '青物三大魚の一つ。ブリよりも南方系で引きが強い。',
      tips: '大型ルアーでアグレッシブに誘う。流れの速い場所を狙う。',
      ecology: '温帯から熱帯の海に生息。成長が早く大型になる。'
    },
    {
      id: 'kurodai',
      name: 'クロダイ（チヌ）',
      image: '🐟',
      difficulty: 3,
      seasons: ['春', '夏', '秋'],
      locations: ['堤防', '磯・防波堤', '河口'],
      size: '30-50cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: 'オキアミ、コーン、練り餌',
      description: '汽水域でも釣れる適応力の高い魚。警戒心が強く知能が高い。',
      tips: '繊細な仕掛けで警戒心を解く。コーンなどの変わり餌も効果的。',
      ecology: '雑食性で適応力が高い。汽水域から沖合まで幅広く生息。'
    },
    {
      id: 'mejina',
      name: 'メジナ（グレ）',
      image: '🐟',
      difficulty: 3,
      seasons: ['秋', '冬', '春'],
      locations: ['磯・防波堤'],
      size: '25-40cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: 'オキアミ、練り餌',
      description: '磯釣りの代表的なターゲット。引きが強く技術を要する。',
      tips: 'ウキフカセ釣りが主流。コマセワークが重要。',
      ecology: '磯や岩礁帯を好む。海藻を主食とする植食性の魚。'
    },
    {
      id: 'ishidai',
      name: 'イシダイ',
      image: '🐟',
      difficulty: 5,
      seasons: ['春', '夏', '秋'],
      locations: ['磯・防波堤', '船'],
      size: '40-70cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: 'ウニ、貝類、カニ',
      description: '磯釣りの王様。強烈な引きと美味しさで最高級のターゲット。',
      tips: '太いハリスと大きな針が必要。根に潜られないよう強引なやり取り。',
      ecology: '岩礁帯の王者。甲殻類や貝類を好む肉食魚。'
    },
    {
      id: 'sawara',
      name: 'サワラ',
      image: '🐟',
      difficulty: 3,
      seasons: ['春', '秋'],
      locations: ['船', '堤防'],
      size: '50-80cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: 'ルアー、活き餌',
      description: '春告魚として親しまれる青物。歯が鋭いので注意が必要。',
      tips: 'ジグやルアーで狙う。ワイヤーリーダーが必要。',
      ecology: '回遊性の青物。春の産卵期に内湾に入ってくる。'
    },
    {
      id: 'inada',
      name: 'イナダ',
      image: '🐟',
      difficulty: 2,
      seasons: ['春', '夏', '秋'],
      locations: ['堤防', '船'],
      size: '30-40cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: 'ルアー、サビキ',
      description: 'ブリの幼魚。群れで回遊するため数釣りが楽しめる。',
      tips: 'ショアジギングやサビキ釣りで狙える。群れを見つけることが重要。',
      ecology: 'ブリの若魚段階。沿岸部で群れを作って回遊。'
    },
    {
      id: 'warasa',
      name: 'ワラサ',
      image: '🐟',
      difficulty: 3,
      seasons: ['秋', '冬'],
      locations: ['船', '磯・防波堤'],
      size: '40-60cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: 'ルアー、活き餌',
      description: 'ハマチとブリの間のサイズ。食味も引きも申し分ない。',
      tips: 'ジギングやキャスティングで狙う。中型のルアーが効果的。',
      ecology: 'ブリの成長段階の一つ。回遊性でパワフルな引きを見せる。'
    },
    {
      id: 'katsuo',
      name: 'カツオ',
      image: '🐟',
      difficulty: 4,
      seasons: ['春', '夏', '秋'],
      locations: ['船'],
      size: '40-60cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: 'ルアー、活き餌',
      description: '回遊性の代表魚。力強い引きと美味しさで人気が高い。',
      tips: '船からのキャスティングが基本。鳥山を目印に探す。',
      ecology: '外洋性の回遊魚。季節により北上南下を繰り返す。'
    },
    {
      id: 'kohada',
      name: 'コハダ',
      image: '🐟',
      difficulty: 1,
      seasons: ['春', '夏', '秋'],
      locations: ['堤防', '河口'],
      size: '10-15cm',
      bestTime: '朝マズメ',
      bait: 'サビキ、小針',
      description: '小型の回遊魚。サビキ釣りで数釣りが楽しめる。',
      tips: '小さめのサビキ針を使用。群れの回遊を待つ。',
      ecology: '内湾性の小魚。成長すると名前が変わる出世魚。'
    },
    {
      id: 'sayori',
      name: 'サヨリ',
      image: '🐟',
      difficulty: 2,
      seasons: ['春', '秋'],
      locations: ['堤防', '船'],
      size: '20-30cm',
      bestTime: '昼間',
      bait: '小針、練り餌',
      description: '細身の美しい魚。繊細な釣りが要求される。',
      tips: '極細の仕掛けで表層を狙う。アタリが繊細なので集中が必要。',
      ecology: '表層回遊魚。細長い体型で群れを作って行動。'
    },
    {
      id: 'anago',
      name: 'アナゴ',
      image: '🐟',
      difficulty: 2,
      seasons: ['夏', '秋'],
      locations: ['堤防', '船'],
      size: '40-60cm',
      bestTime: '夜間',
      bait: 'イソメ、小魚',
      description: '夜行性の底魚。食味が良く天ぷらなどで人気。',
      tips: '夜釣りが基本。底付近でじっくり待つ。',
      ecology: '砂泥底の穴に住む。夜間に餌を求めて活動する。'
    },
    {
      id: 'tako',
      name: 'タコ',
      image: '🐙',
      difficulty: 3,
      seasons: ['夏', '秋'],
      locations: ['堤防', '磯・防波堤', '船'],
      size: '30-60cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: 'タコエギ、カニ',
      description: '岩礁帯に住む軟体動物。独特な釣り方で楽しめる。',
      tips: 'タコエギで岩の隙間を探る。根掛かりしやすいので注意。',
      ecology: '岩の隙間に住む。知能が高く警戒心も強い。'
    },
    {
      id: 'hotaruika',
      name: 'ホタルイカ',
      image: '🦑',
      difficulty: 2,
      seasons: ['春'],
      locations: ['堤防', '船'],
      size: '5-7cm',
      bestTime: '夜間',
      bait: '小型エギ、サビキ',
      description: '発光する小型のイカ。春の風物詩として人気。',
      tips: '夜間に集魚灯を使って狙う。群れで寄ってくる。',
      ecology: '深海から春に浅場に上がってくる。発光器を持つ。'
    },
    {
      id: 'amadai',
      name: 'アマダイ',
      image: '🐟',
      difficulty: 3,
      seasons: ['秋', '冬'],
      locations: ['船'],
      size: '30-50cm',
      bestTime: '昼間',
      bait: 'エビ、イカ',
      description: '高級魚として知られる底魚。上品な味で人気。',
      tips: '船からの底釣りが基本。繊細なアタリを見逃さない。',
      ecology: '砂泥底に穴を掘って住む。警戒心が強い魚。'
    },
    {
      id: 'nodoguro',
      name: 'ノドグロ',
      image: '🐟',
      difficulty: 4,
      seasons: ['秋', '冬'],
      locations: ['船'],
      size: '20-40cm',
      bestTime: '昼間',
      bait: 'エビ、イカ、小魚',
      description: '高級魚の代表格。脂の乗った白身で最高の食味。',
      tips: '深場での釣りが基本。繊細な仕掛けで狙う。',
      ecology: '深海に住む底魚。成長が遅く貴重な魚種。'
    },
    {
      id: 'kinmedai',
      name: 'キンメダイ',
      image: '🐟',
      difficulty: 3,
      seasons: ['秋', '冬', '春'],
      locations: ['船'],
      size: '30-50cm',
      bestTime: '昼間',
      bait: 'エビ、イカ',
      description: '赤い体が美しい深海魚。煮付けで有名な高級魚。',
      tips: '深場での胴突き釣りが基本。重いオモリを使用。',
      ecology: '深海の岩礁帯に住む。大きな目が特徴的。'
    },
    {
      id: 'guchi',
      name: 'グチ',
      image: '🐟',
      difficulty: 2,
      seasons: ['春', '夏', '秋'],
      locations: ['堤防', '船'],
      size: '15-25cm',
      bestTime: '昼間',
      bait: 'イソメ、エビ',
      description: '投げ釣りの定番ターゲット。引き上げるとグーグー鳴く。',
      tips: '投げ釣りで広範囲を探る。数釣りが楽しめる。',
      ecology: '砂泥底を好む底魚。群れで行動することが多い。'
    },
    {
      id: 'haze',
      name: 'ハゼ',
      image: '🐟',
      difficulty: 1,
      seasons: ['夏', '秋'],
      locations: ['河口', '堤防'],
      size: '10-20cm',
      bestTime: '昼間',
      bait: 'イソメ、エビ',
      description: '初心者に最適な魚。汽水域で手軽に釣れる。',
      tips: '軽い仕掛けで底を探る。数釣りが楽しめる。',
      ecology: '汽水域の底に住む。成長すると深場に移動。'
    },
    {
      id: 'bass',
      name: 'シーバス',
      image: '🐟',
      difficulty: 3,
      seasons: ['春', '夏', '秋'],
      locations: ['河口', '堤防', 'サーフ'],
      size: '40-80cm',
      bestTime: '夜間・朝マズメ',
      bait: 'ルアー',
      description: 'ルアーフィッシングの人気ターゲット。都市部でも狙える。',
      tips: 'ルアーのアクションが重要。潮の変化を狙う。',
      ecology: '汽水域を好む。夜行性が強く警戒心も高い。'
    },
    {
      id: 'pike',
      name: 'カマス',
      image: '🐟',
      difficulty: 2,
      seasons: ['夏', '秋'],
      locations: ['堤防', '船'],
      size: '20-30cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: 'ルアー、サビキ',
      description: '細身の魚食魚。ルアーによく反応する。',
      tips: '小型のルアーで表層を狙う。群れを見つけることが重要。',
      ecology: '表層回遊魚。小魚を追って群れで行動。'
    },
    {
      id: 'shimaaji',
      name: 'シマアジ',
      image: '🐟',
      difficulty: 4,
      seasons: ['夏', '秋'],
      locations: ['船', '磯・防波堤'],
      size: '30-50cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: 'ルアー、活き餌',
      description: '高級魚として知られる美味しい魚。警戒心が強い。',
      tips: '繊細な仕掛けで慎重に狙う。潮通しの良い場所を選ぶ。',
      ecology: '回遊性で群れを作る。成長すると単独行動することも。'
    },
    {
      id: 'isaki',
      name: 'イサキ',
      image: '🐟',
      difficulty: 2,
      seasons: ['春', '夏'],
      locations: ['船', '磯・防波堤'],
      size: '20-30cm',
      bestTime: '朝マズメ・夕マズメ',
      bait: 'オキアミ、イソメ',
      description: '初夏の代表的なターゲット。食味が良く人気が高い。',
      tips: 'コマセを効かせたウキ釣りが有効。群れで釣れることが多い。',
      ecology: '岩礁帯周辺に群れを作る。産卵期は浅場に移動。'
    }
  ];

  // フィルタリング
  const filteredFish = fishData.filter(fish => {
    const seasonMatch = selectedSeason === 'all' || fish.seasons.includes(selectedSeason as Season);
    const difficultyMatch = selectedDifficulty === 'all' || fish.difficulty.toString() === selectedDifficulty;
    return seasonMatch && difficultyMatch;
  });

  // 難易度を星で表示
  const renderDifficultyStars = (difficulty: number): React.ReactNode[] => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`difficulty-star ${i < difficulty ? '' : 'empty'}`}>
        ★
      </span>
    ));
  };

  // 季節タグのスタイル
  const getSeasonClass = (season: Season): string => {
    switch (season) {
      case '春': return 'season-spring';
      case '夏': return 'season-summer';
      case '秋': return 'season-autumn';
      case '冬': return 'season-winter';
      default: return '';
    }
  };

  return (
    <div className="fish-info-container">
      {/* ヘッダー */}
      <header className="fish-header">
        <div className="fish-header-container">
          <h1 className="fish-title">
            🐟 魚種図鑑
          </h1>
          <p className="fish-subtitle">
            初心者向けの魚種情報と釣り方ガイド
          </p>
        </div>
      </header>

      <main className="fish-main">
        {/* 戻るボタン */}
        <div>
          <Link 
            href="/"
            className="back-button"
          >
            ← ホームに戻る
          </Link>
        </div>

        {/* フィルター */}
        <div className="filter-container">
          <h3 className="filter-title">
            魚種を絞り込む
          </h3>
          
          <div className="filter-grid">
            <div className="filter-group">
              <label className="filter-label">
                季節で絞り込み
              </label>
              <select 
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
                className="filter-select"
              >
                <option value="all">すべての季節</option>
                <option value="春">春</option>
                <option value="夏">夏</option>
                <option value="秋">秋</option>
                <option value="冬">冬</option>
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">
                難易度で絞り込み
              </label>
              <select 
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="filter-select"
              >
                <option value="all">すべての難易度</option>
                <option value="1">★☆☆☆☆ (超初心者向け)</option>
                <option value="2">★★☆☆☆ (初心者向け)</option>
                <option value="3">★★★☆☆ (中級者向け)</option>
                <option value="4">★★★★☆ (上級者向け)</option>
                <option value="5">★★★★★ (超上級者向け)</option>
              </select>
            </div>
          </div>
        </div>

        {/* 魚カードグリッド */}
        <div className="fish-grid">
          {filteredFish.map((fish) => (
            <div key={fish.id} className="fish-card">
              <div className="fish-card-header">
                <div className="fish-card-icon">{fish.image}</div>
                <h3 className="fish-card-name">{fish.name}</h3>
                <p className="fish-card-size">サイズ: {fish.size}</p>
              </div>

              <div className="fish-card-body">
                <div className="fish-card-difficulty">
                  <span className="fish-card-difficulty-label">難易度:</span>
                  <div className="difficulty-stars">
                    {renderDifficultyStars(fish.difficulty)}
                  </div>
                </div>

                <div className="fish-card-info">
                  <div className="fish-card-info-item">
                    <span className="fish-card-info-label">季節:</span>
                    <div className="seasons-container">
                      {fish.seasons.map((season, index) => (
                        <span key={index} className={`season-tag ${getSeasonClass(season)}`}>
                          {season}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="fish-card-info-item">
                    <span className="fish-card-info-label">場所:</span>
                    <span className="fish-card-info-value">{fish.locations.join('・')}</span>
                  </div>
                  
                  <div className="fish-card-info-item">
                    <span className="fish-card-info-label">時間:</span>
                    <span className="fish-card-info-value">{fish.bestTime}</span>
                  </div>
                  
                  <div className="fish-card-info-item">
                    <span className="fish-card-info-label">エサ:</span>
                    <span className="fish-card-info-value">{fish.bait}</span>
                  </div>
                </div>

                <p className="fish-card-description">
                  {fish.description}
                </p>

                <Link 
                  href={`/?fish=${fish.id}`}
                  className="fish-card-button"
                >
                  この魚が釣れるスポットを探す
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredFish.length === 0 && (
          <div className="no-results">
            <p>選択した条件に合う魚種が見つかりませんでした。</p>
          </div>
        )}
      </main>
    </div>
  );
}
