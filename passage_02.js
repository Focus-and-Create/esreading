const PASSAGE_02 = {
  meta: {
    id: 'gastronomia',
    title: 'La gastronomía latinoamericana',
    level: 'B1',
    topic: '문화·일상'
  },

  paragraphs_es: [
    'La gastronomía latinoamericana es una de las más ricas y variadas del mundo. Cada país tiene sus propios platos típicos, sus ingredientes locales y sus tradiciones culinarias. Esta diversidad refleja la mezcla de culturas indígenas, europeas, africanas y asiáticas que han convivido en la región durante siglos.',
    'En México, por ejemplo, los tacos, las enchiladas y el mole son platos muy populares. El maíz es un ingrediente fundamental que se utiliza en casi todas las comidas. Además, los chiles aportan un sabor picante y único a la cocina mexicana, que fue declarada Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO en 2010.',
    'En Perú, la cocina combina influencias indígenas, españolas, chinas y japonesas. El ceviche, hecho con pescado fresco y limón, es considerado el plato nacional. La quinua y la papa son alimentos básicos que se cultivan en los Andes desde hace miles de años. Actualmente, muchos restaurantes peruanos son reconocidos a nivel internacional.',
    'Argentina y Uruguay son famosos por sus carnes asadas. El asado no es solo una comida, sino también una tradición social. Las familias y los amigos se reúnen los domingos para preparar la parrilla y disfrutar juntos. Acompañan la carne con chimichurri, una salsa hecha con perejil, ajo y aceite de oliva.',
    'En el Caribe, la influencia africana es muy evidente. Platos como el arroz con pollo, los frijoles negros y los plátanos fritos se consumen diariamente en países como Cuba y la República Dominicana. El uso de especias y hierbas frescas hace que estos platos sean muy aromáticos y sabrosos.',
    'En conclusión, la comida latinoamericana es mucho más que simple alimentación. Es una expresión cultural que une a las personas, conserva las tradiciones de los antepasados y muestra al mundo la riqueza de cada país. Probar estos platos es una forma deliciosa de conocer la historia y el alma de América Latina.'
  ],

  paragraphs_ko: [
    '라틴 아메리카 음식은 세계에서 가장 풍부하고 다양한 음식 중 하나입니다. 각 나라마다 고유한 대표 요리, 현지 재료, 그리고 요리 전통이 있습니다. 이러한 다양성은 수 세기 동안 이 지역에 공존해 온 원주민, 유럽, 아프리카, 아시아 문화의 혼합을 반영합니다.',
    '예를 들어 멕시코에서는 타코, 엔칠라다, 몰레가 매우 인기 있는 요리입니다. 옥수수는 거의 모든 음식에 사용되는 기본 재료입니다. 또한 고추는 멕시코 요리에 맵고 독특한 맛을 더해주며, 이 멕시코 요리는 2010년 유네스코에 의해 인류무형문화유산으로 지정되었습니다.',
    '페루에서는 요리에 원주민, 스페인, 중국, 일본의 영향이 결합되어 있습니다. 신선한 생선과 라임으로 만든 세비체는 국민 음식으로 여겨집니다. 퀴노아와 감자는 안데스 산맥에서 수천 년 전부터 재배되어 온 기본 식재료입니다. 현재 많은 페루 레스토랑이 국제적으로 인정받고 있습니다.',
    '아르헨티나와 우루과이는 구운 고기로 유명합니다. 아사도(바비큐)는 단순한 음식이 아니라 사회적 전통이기도 합니다. 가족과 친구들은 일요일에 모여 그릴을 준비하고 함께 즐깁니다. 그들은 고기에 파슬리, 마늘, 올리브 오일로 만든 소스인 치미추리를 곁들입니다.',
    '카리브 지역에서는 아프리카의 영향이 매우 분명합니다. 닭고기 볶음밥, 검은콩, 튀긴 플랜틴 같은 요리는 쿠바나 도미니카 공화국 같은 나라에서 매일 소비됩니다. 향신료와 신선한 허브의 사용은 이 요리들을 매우 향기롭고 맛있게 만듭니다.',
    '결론적으로 라틴 아메리카 음식은 단순한 영양 섭취 이상의 것입니다. 그것은 사람들을 하나로 묶고, 조상들의 전통을 보존하며, 각 나라의 풍요로움을 세계에 보여주는 문화적 표현입니다. 이러한 요리들을 맛보는 것은 라틴 아메리카의 역사와 영혼을 알아가는 맛있는 방법입니다.'
  ],

  vocab: [
    // NOUNS
    {id:'gastronomia',  t:'noun', w:'gastronomía',  m:'미식, 요리법',     ee:'La gastronomía mexicana es muy famosa.',              ek:'멕시코 요리는 매우 유명하다.',             ant:'ayuno (단식)',           frm:'gastronomías (복수)'},
    {id:'plato',        t:'noun', w:'plato',         m:'요리, 접시',       ee:'Este plato es típico de Perú.',                       ek:'이 요리는 페루의 대표 음식이다.',          ant:'bebida (음료)',           frm:'platos (복수)'},
    {id:'ingrediente',  t:'noun', w:'ingrediente',   m:'재료, 성분',       ee:'El maíz es un ingrediente importante.',               ek:'옥수수는 중요한 재료다.',                  ant:'-',                      frm:'ingredientes (복수)'},
    {id:'tradicion',    t:'noun', w:'tradición',     m:'전통',             ee:'El asado es una tradición familiar.',                 ek:'아사도는 가족 전통이다.',                  ant:'novedad (새로움)',        frm:'tradiciones (복수)'},
    {id:'mezcla',       t:'noun', w:'mezcla',        m:'혼합, 섞임',       ee:'Es una mezcla de culturas.',                          ek:'그것은 문화들의 혼합이다.',                ant:'separación (분리)',       frm:'mezclas (복수)'},
    {id:'cultura',      t:'noun', w:'cultura',       m:'문화',             ee:'La cultura latinoamericana es diversa.',              ek:'라틴 아메리카 문화는 다양하다.',           ant:'-',                      frm:'culturas (복수)'},
    {id:'maiz',         t:'noun', w:'maíz',          m:'옥수수',           ee:'El maíz se cultiva en muchos países.',                ek:'옥수수는 많은 나라에서 재배된다.',         ant:'-',                      frm:'maíces (복수)'},
    {id:'chile',        t:'noun', w:'chile',         m:'고추',             ee:'Los chiles son muy picantes.',                        ek:'고추는 매우 맵다.',                        ant:'-',                      frm:'chiles (복수)'},
    {id:'sabor',        t:'noun', w:'sabor',         m:'맛',               ee:'Este plato tiene un sabor único.',                    ek:'이 요리는 독특한 맛이 있다.',              ant:'insipidez (싱거움)',      frm:'sabores (복수)'},
    {id:'cocina',       t:'noun', w:'cocina',        m:'요리, 주방',       ee:'La cocina peruana es reconocida.',                    ek:'페루 요리는 인정받고 있다.',               ant:'-',                      frm:'cocinas (복수)'},
    {id:'pescado',      t:'noun', w:'pescado',       m:'생선',             ee:'El ceviche se hace con pescado.',                     ek:'세비체는 생선으로 만든다.',                ant:'carne (고기)',            frm:'pescados (복수)'},
    {id:'papa',         t:'noun', w:'papa',          m:'감자 (중남미)',     ee:'La papa viene de los Andes.',                        ek:'감자는 안데스 산맥에서 왔다.',             ant:'-',                      frm:'papas (복수)'},
    {id:'carne',        t:'noun', w:'carne',         m:'고기',             ee:'La carne argentina es famosa.',                       ek:'아르헨티나 고기는 유명하다.',              ant:'verdura (채소)',          frm:'carnes (복수)'},
    {id:'parrilla',     t:'noun', w:'parrilla',      m:'그릴, 석쇠',       ee:'Preparamos la parrilla los domingos.',                ek:'우리는 일요일에 그릴을 준비한다.',         ant:'-',                      frm:'parrillas (복수)'},
    {id:'salsa',        t:'noun', w:'salsa',         m:'소스',             ee:'El chimichurri es una salsa argentina.',              ek:'치미추리는 아르헨티나 소스다.',            ant:'-',                      frm:'salsas (복수)'},
    {id:'arroz',        t:'noun', w:'arroz',         m:'쌀, 밥',           ee:'Comemos arroz con pollo.',                            ek:'우리는 닭고기와 밥을 먹는다.',             ant:'-',                      frm:'arroces (복수)'},
    {id:'frijol',       t:'noun', w:'frijol',        m:'콩',               ee:'Los frijoles negros son típicos del Caribe.',         ek:'검은콩은 카리브의 대표 음식이다.',         ant:'-',                      frm:'frijoles (복수)'},
    {id:'especia',      t:'noun', w:'especia',       m:'향신료',           ee:'Las especias dan aroma a la comida.',                 ek:'향신료는 음식에 향을 더한다.',             ant:'-',                      frm:'especias (복수)'},
    {id:'hierba',       t:'noun', w:'hierba',        m:'허브, 풀',         ee:'Usamos hierbas frescas.',                             ek:'우리는 신선한 허브를 사용한다.',           ant:'-',                      frm:'hierbas (복수)'},
    {id:'antepasado',   t:'noun', w:'antepasado',    m:'조상',             ee:'Conservamos las tradiciones de los antepasados.',     ek:'우리는 조상의 전통을 보존한다.',           ant:'descendiente (후손)',     frm:'antepasados (복수)'},
    // ADJECTIVES
    {id:'rico',         t:'adj',  w:'rico/a',        m:'풍부한, 맛있는',   ee:'La gastronomía es muy rica.',                         ek:'요리가 매우 풍부하다.',                    ant:'pobre (가난한)',          frm:'rico/rica/ricos/ricas'},
    {id:'variado',      t:'adj',  w:'variado/a',     m:'다양한',           ee:'La cocina es variada.',                               ek:'요리가 다양하다.',                         ant:'monótono (단조로운)',     frm:'variado/variada/variados/variadas'},
    {id:'tipico',       t:'adj',  w:'típico/a',      m:'전형적인, 대표적인', ee:'Es un plato típico.',                               ek:'그것은 대표적인 요리다.',                  ant:'atípico (비전형적인)',    frm:'típico/típica/típicos/típicas'},
    {id:'picante',      t:'adj',  w:'picante',       m:'매운',             ee:'La salsa es muy picante.',                            ek:'소스가 매우 맵다.',                        ant:'suave (순한)',            frm:'picante/picantes'},
    {id:'fresco',       t:'adj',  w:'fresco/a',      m:'신선한',           ee:'Usamos pescado fresco.',                              ek:'우리는 신선한 생선을 사용한다.',           ant:'congelado (냉동된)',      frm:'fresco/fresca/frescos/frescas'},
    {id:'aromatico',    t:'adj',  w:'aromático/a',   m:'향이 좋은',        ee:'Los platos son aromáticos.',                          ek:'요리들이 향이 좋다.',                      ant:'inodoro (무향의)',        frm:'aromático/aromática/aromáticos/aromáticas'},
    {id:'sabroso',      t:'adj',  w:'sabroso/a',     m:'맛있는',           ee:'La comida está sabrosa.',                             ek:'음식이 맛있다.',                           ant:'soso (싱거운)',           frm:'sabroso/sabrosa/sabrosos/sabrosas'},
    {id:'fundamental',  t:'adj',  w:'fundamental',   m:'근본적인, 기본적인', ee:'El maíz es fundamental.',                           ek:'옥수수는 기본적이다.',                     ant:'secundario (부차적인)',   frm:'fundamental/fundamentales'},
    // VERBS
    {id:'reflejar',     t:'verb', w:'reflejar',      m:'반영하다',         ee:'La comida refleja la cultura.',                       ek:'음식은 문화를 반영한다.',                  ant:'ocultar (숨기다)',        frm:'refleja (3인칭 단수 현재)'},
    {id:'convivir2',    t:'verb', w:'convivir',      m:'공존하다',         ee:'Las culturas conviven en la región.',                 ek:'문화들이 그 지역에서 공존한다.',           ant:'separarse (분리되다)',    frm:'convive (3인칭 단수 현재)'},
    {id:'utilizar',     t:'verb', w:'utilizar',      m:'사용하다',         ee:'Utiliza ingredientes locales.',                       ek:'그/그녀는 현지 재료를 사용한다.',          ant:'desechar (버리다)',       frm:'utiliza (3인칭 단수 현재)'},
    {id:'aportar',      t:'verb', w:'aportar',       m:'기여하다, 더하다', ee:'El chile aporta sabor.',                              ek:'고추는 맛을 더한다.',                      ant:'restar (빼다)',           frm:'aporta (3인칭 단수 현재)'},
    {id:'declarar',     t:'verb', w:'declarar',      m:'선언하다, 지정하다', ee:'La UNESCO declaró la cocina patrimonio.',            ek:'유네스코는 그 요리를 유산으로 지정했다.', ant:'anular (취소하다)',       frm:'declara (3인칭 단수 현재)'},
    {id:'combinar',     t:'verb', w:'combinar',      m:'결합하다',         ee:'Combina sabores diferentes.',                         ek:'그/그녀는 다른 맛들을 결합한다.',          ant:'separar (분리하다)',      frm:'combina (3인칭 단수 현재)'},
    {id:'cultivar',     t:'verb', w:'cultivar',      m:'재배하다',         ee:'Cultivan papas en los Andes.',                        ek:'그들은 안데스에서 감자를 재배한다.',       ant:'abandonar (방치하다)',    frm:'cultiva (3인칭 단수 현재)'},
    {id:'reconocer',    t:'verb', w:'reconocer',     m:'인정하다',         ee:'Reconocen la cocina peruana.',                        ek:'그들은 페루 요리를 인정한다.',             ant:'ignorar (무시하다)',      frm:'reconoce (3인칭 단수 현재)'},
    {id:'reunirse',     t:'verb', w:'reunirse',      m:'모이다',           ee:'Se reúnen los domingos.',                             ek:'그들은 일요일에 모인다.',                  ant:'dispersarse (흩어지다)', frm:'se reúne (3인칭 단수 현재)'},
    {id:'disfrutar',    t:'verb', w:'disfrutar',     m:'즐기다',           ee:'Disfrutan de la comida.',                             ek:'그들은 음식을 즐긴다.',                    ant:'sufrir (괴로워하다)',     frm:'disfruta (3인칭 단수 현재)'},
    {id:'consumir',     t:'verb', w:'consumir',      m:'소비하다, 섭취하다', ee:'Consumen frijoles diariamente.',                    ek:'그들은 매일 콩을 섭취한다.',               ant:'producir (생산하다)',     frm:'consume (3인칭 단수 현재)'},
    {id:'conservar',    t:'verb', w:'conservar',     m:'보존하다',         ee:'Conservan las tradiciones.',                          ek:'그들은 전통을 보존한다.',                  ant:'perder (잃다)',           frm:'conserva (3인칭 단수 현재)'},
    // EXPRESSIONS
    {id:'no_solo_sino_tambien', t:'expr', w:'no solo... sino también', m:'~뿐만 아니라 ~도',    ee:'El asado no es solo una comida, sino también una tradición.', ek:'아사도는 단지 음식이 아니라 전통이기도 하다.', ant:'-', frm:'-'},
    {id:'desde_hace',           t:'expr', w:'desde hace',              m:'~이래로 (지금까지)',   ee:'Cultivan la papa desde hace miles de años.',                  ek:'그들은 수천 년 전부터 감자를 재배해 왔다.',   ant:'-', frm:'-'},
    {id:'a_nivel_internacional',t:'expr', w:'a nivel internacional',   m:'국제적으로',           ee:'La cocina es reconocida a nivel internacional.',              ek:'그 요리는 국제적으로 인정받고 있다.',         ant:'a nivel local (지역적으로)', frm:'-'},
    {id:'mucho_mas_que',        t:'expr', w:'mucho más que',           m:'~이상의 것',           ee:'La comida es mucho más que alimentación.',                    ek:'음식은 단순한 영양 섭취 이상의 것이다.',      ant:'-', frm:'-'},
    {id:'en_conclusion',        t:'expr', w:'en conclusión',           m:'결론적으로',           ee:'En conclusión, la cocina une a las personas.',               ek:'결론적으로, 요리는 사람들을 하나로 묶는다.',  ant:'-', frm:'-'}
  ]
};
