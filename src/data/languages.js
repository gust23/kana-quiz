export const _hiragana = {
  h_group1_h: { あ: 'a', い: 'i', う: 'u', え: 'e', お: 'o' },
  h_group2_h: { か: 'ka', き: 'ki', く: 'ku', け: 'ke', こ: 'ko' },
  h_group3_h: { さ: 'sa', し: 'shi', す: 'su', せ: 'se', そ: 'so' },
  h_group4_h: { た: 'ta', ち: 'chi', つ: 'tsu', て: 'te', と: 'to' },
  h_group5_h: { な: 'na', に: 'ni', ぬ: 'nu', ね: 'ne', の: 'no' },
  h_group6_h: { は: 'ha', ひ: 'hi', ふ: 'fu', へ: 'he', ほ: 'ho' },
  h_group7_h: { ま: 'ma', み: 'mi', む: 'mu', め: 'me', も: 'mo' },
  h_group8_h: { や: 'ya', ゆ: 'yu', よ: 'yo' },
  h_group9_h: { ら: 'ra', り: 'ri', る: 'ru', れ: 're', ろ: 'ro' },
  h_group10_h: { わ: 'wa', を: 'wo', ん: 'n' },

  h_group11_ha: { が: 'ga', ぎ: 'gi', ぐ: 'gu', げ: 'ge', ご: 'go' },
  h_group12_ha: { ざ: 'za', じ: 'ji', ず: 'zu', ぜ: 'ze', ぞ: 'zo' },
  h_group13_ha: { だ: 'da', ぢ: 'ji', づ: 'zu', で: 'de', ど: 'do' },
  h_group14_ha: { ば: 'ba', び: 'bi', ぶ: 'bu', べ: 'be', ぼ: 'bo' },
  h_group15_ha: { ぱ: 'pa', ぴ: 'pi', ぷ: 'pu', ぺ: 'pe', ぽ: 'po' },

  h_group16_ha: { きゃ: ['kya'], きゅ: ['kyu'], きょ: ['kyo'] },
  h_group17_ha: { しゃ: ['sha', 'sya'], しゅ: ['shu', 'syu'], しょ: ['sho', 'syo'] },
  h_group18_ha: { ちゃ: ['cha', 'cya', 'tya'], ちゅ: ['chu', 'cyu'], ちょ: ['cho', 'cyo'] },
  h_group19_ha: { にゃ: ['nya'], にゅ: ['nyu'], にょ: ['nyo'] },
  h_group20_ha: { ひゃ: ['hya'], ひゅ: ['hyu'], ひょ: ['hyo'] },
  h_group21_ha: { みゃ: ['mya'], みゅ: ['myu'], みょ: ['myo'] },
  h_group22_ha: { りゃ: ['rya'], りゅ: ['ryu'], りょ: ['ryo'] },
  h_group23_ha: { ぎゃ: ['gya'], ぎゅ: ['gyu'], ぎょ: ['gyo'] },
  h_group24_ha: { じゃ: ['ja', 'jya'], じゅ: ['ju', 'jyu'], じょ: ['jo', 'jyo'] },
  h_group25_ha: { びゃ: ['bya'], びゅ: ['byu'], びょ: ['byo'] },
  h_group26_ha: { ぴゃ: ['pya'], ぴゅ: ['pyu'], ぴょ: ['pyo'] },
};

export const hiragana = [
  { groupId: 1, kana: 'あ', romanji: ['a'] },
  { groupId: 1, kana: 'い', romanji: ['i'] },
  { groupId: 1, kana: 'う', romanji: ['u'] },
  { groupId: 1, kana: 'え', romanji: ['e'] },
  { groupId: 1, kana: 'お', romanji: ['o'] },

  { groupId: 18, kana: 'ちゃ', romanji: ['cha', 'cya', 'tya'] },
  { groupId: 18, kana: 'ちゅ', romanji: ['chu', 'cyu'] },
  { groupId: 18, kana: 'ちょ', romanji: ['cho', 'cyo'] },

];

export const _katakana = {
  k_group1_k: { ア: ['a'], イ: ['i'], ウ: ['u'], エ: ['e'], オ: ['o'] },
  k_group2_k: { カ: ['ka'], キ: ['ki'], ク: ['ku'], ケ: ['ke'], コ: ['ko'] },
  k_group3_k: { サ: ['sa'], シ: ['shi', 'si'], ス: ['su'], セ: ['se'], ソ: ['so'] },
  k_group4_k: { タ: ['ta'], チ: ['chi', 'ti'], ツ: ['tsu', 'tu'], テ: ['te'], ト: ['to'] },
  k_group5_k: { ナ: ['na'], ニ: ['ni'], ヌ: ['nu'], ネ: ['ne'], ノ: ['no'] },
  k_group6_k: { ハ: ['ha'], ヒ: ['hi'], フ: ['fu', 'hu'], ヘ: ['he'], ホ: ['ho'] },
  k_group7_k: { マ: ['ma'], ミ: ['mi'], ム: ['mu'], メ: ['me'], モ: ['mo'] },
  k_group8_k: { ヤ: ['ya'], ユ: ['yu'], ヨ: ['yo'] },
  k_group9_k: { ラ: ['ra'], リ: ['ri'], ル: ['ru'], レ: ['re'], ロ: ['ro'] },
  k_group10_k: { ワ: ['wa'], ヲ: ['wo', 'o'], ン: ['n'] },
  
  k_group11_ka: { ガ: ['ga'], ギ: ['gi'], グ: ['gu'], ゲ: ['ge'], ゴ: ['go'] },
  k_group12_ka: { ザ: ['za'], ジ: ['ji', 'zi'], ズ: ['zu', 'du'], ゼ: ['ze'], ゾ: ['zo'] },
  k_group13_ka: { ダ: ['da'], ヂ: ['ji', 'di', 'dzi'], ヅ: ['zu', 'dzu'], デ: ['de'], ド: ['do'] },
  k_group14_ka: { バ: ['ba'], ビ: ['bi'], ブ: ['bu'], ベ: ['be'], ボ: ['bo'] },
  k_group15_ka: { パ: ['pa'], ピ: ['pi'], プ: ['pu'], ペ: ['pe'], ポ: ['po'] },

  k_group16_ka: { キャ: ['kya'], キュ: ['kyu'], キョ: ['kyo'] },
  k_group17_ka: { シャ: ['sha', 'sya'], シュ: ['shu', 'syu'], ショ: ['sho', 'syo'] },
  k_group18_ka: { チャ: ['cha', 'cya', 'tya'], チュ: ['chu', 'cyu'], チョ: ['cho', 'cyo'] },
  k_group19_ka: { ニャ: ['nya'], ニュ: ['nyu'], ニョ: ['nyo'] },
  k_group20_ka: { ヒャ: ['hya'], ヒュ: ['hyu'], ヒョ: ['hyo'] },
  k_group21_ka: { ミャ: ['mya'], ミュ: ['myu'], ミョ: ['myo'] },
  k_group22_ka: { リャ: ['rya'], リュ: ['ryu'], リョ: ['ryo'] },
  k_group23_ka: { ギャ: ['gya'], ギュ: ['gyu'], ギョ: ['gyo'] },
  k_group24_ka: { ジャ: ['ja', 'jya'], ジュ: ['ju', 'jyu'], ジョ: ['jo', 'jyo'] },
  k_group25_ka: { ビャ: ['bya'], ビュ: ['byu'], ビョ: ['byo'] },
  k_group26_ka: { ピャ: ['pya'], ピュ: ['pyu'], ピョ: ['pyo'] },
  k_group27_ka: { ファ: ['fa'], フィ: ['fi'], フェ: ['fe'], フォ: ['fo'], フュ: ['fyu'] },
  k_group28_ka: { ウィ: ['wi'], ウェ: ['we'], ウォ: ['wo'], ヴァ: ['va'], ヴィ: ['vi'], ヴェ: ['ve'], ヴォ: ['vo'] },
  k_group29_ka: { ツァ: ['tsa'], ツィ: ['tsi'], ツェ: ['tse'], ツォ: ['tso'] },
  k_group30_ka: { チェ: ['che'], シェ: ['she'], ジェ: ['je'] },
  k_group31_ka: { ティ: ['ti'], ディ: ['di'], デュ: ['du'], トゥ: ['tu'] },
};

export const katakana = [
  { groupId: 1, kana: 'ア', romanji: ['a'] },
  { groupId: 1, kana: 'イ', romanji: ['i'] },
  { groupId: 1, kana: 'ウ', romanji: ['u'] },
  { groupId: 1, kana: 'エ', romanji: ['e'] },
  { groupId: 1, kana: 'オ', romanji: ['o'] },

  { groupId: 18, kana: 'チャ', romanji: ['cha', 'cya', 'tya'] },
  { groupId: 18, kana: 'チュ', romanji: ['chu', 'cyu'] },
  { groupId: 18, kana: 'チョ', romanji: ['cho', 'cyo'] },
];