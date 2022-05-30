class Characteristic < ActiveHash::Base
  self.data = [
    { id: 0, name: '---' },
    { id: 1, name: 'すりぬけ' },
    { id: 2, name: 'クリアボディ' },
    { id: 3, name: 'のろわれボディ' },
    { id: 4, name: 'トレース' },
    { id: 5, name: 'ダウンロード' },
    { id: 6, name: 'アナライズ' },
    { id: 7, name: 'アイスフェイス' },
    { id: 8, name: 'あめふらし' },
    { id: 9, name: 'シェルアーマー' },
    { id: 10, name: 'スキルリンク' },
    { id: 11, name: 'ぼうじん' },
    { id: 12, name: 'くだけるよろい' },
    { id: 13, name: 'ほろびのボディ' },
    { id: 14, name: 'とびだすなかみ' },
    { id: 15, name: 'てんねん' },
    { id: 16, name: 'ばけのかわ' },
    { id: 17, name: 'めんえき' },
    { id: 18, name: 'あついしぼう' },
    { id: 19, name: 'くいしんぼう' },
    { id: 20, name: 'すいすい' },
    { id: 21, name: 'どくしゅ' },
    { id: 22, name: 'ちょすい' },
    { id: 23, name: 'いたずらごころ' },
    { id: 24, name: 'ようりょくそ' }
  ]

  include ActiveHash::Associations
  has_many :pokemon_characteristics

  def pokemons
    pokemon_characteristics.map(&:pokemon)
  end
  
end