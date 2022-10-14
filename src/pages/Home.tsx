import React from "react";
import "../styles/home.css";
import { NavigationBar } from "../components/navigation/navBar";
import { PageHero } from "../components/pageComponents/pageHero";
function Home() {
  return (
    <>
      <div className="container">
        <div className="page-header">
          <NavigationBar />
        </div>
        <div className="page-content">
          <PageHero
            title="michael edes"
            subtitle="software engineer"
            textColor="var(--dark)"
            backgroundColor="var(--grad)"
          />
          <div className="content-intro-container">
            <div className="content-intro">
              <div className="content-intro-title">
                <h1>TECH STACK</h1>
              </div>
              <hr />
              <div className="content-intro-tech-stack">
                <div className="tech-stack-list">
                  <div>FRONT END</div>
                  <div>
                    <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>CSS3</li>
                      <li>CSS3</li>
                      <li>CSS3</li>
                    </ul>
                  </div>
                </div>
                <div className="tech-stack-list">
                  <div>BACK END</div>
                  <div>
                    <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>CSS3</li>
                      <li>CSS3</li>
                      <li>CSS3</li>
                    </ul>
                  </div>
                </div>
                <div className="tech-stack-list">
                  <div>SOFTWARE END</div>
                  <div>
                    <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>CSS3</li>
                      <li>CSS3</li>
                      <li>CSS3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-footer">another content</div>
      </div>
    </>
  );
}

export default Home;

const Lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies, risus ut viverra facilisis, nulla turpis feugiat ligula, vel porta magna ipsum vitae lacus. Nullam commodo blandit quam. Praesent aliquet magna a eros venenatis, eget vestibulum orci vulputate. Nulla facilisi. Morbi tempus ex ac orci viverra, nec eleifend odio tempor. Suspendisse tincidunt sapien eu arcu vehicula, sit amet tristique nulla finibus. Curabitur laoreet nisl erat, vel elementum tortor convallis efficitur.

    Donec efficitur non risus vel maximus. Duis ullamcorper rhoncus magna, at ullamcorper urna pellentesque vitae. Cras non lorem aliquet, aliquam elit quis, tempor leo. Etiam blandit sollicitudin leo eu viverra. Morbi auctor magna aliquet, dapibus mauris a, rutrum dolor. Sed at iaculis massa. Praesent ornare fermentum massa, ac mattis lacus imperdiet vel. In egestas justo vitae elit viverra, vitae scelerisque nibh rutrum. In congue porta libero, id maximus enim efficitur non. Duis fringilla nunc in ipsum iaculis vestibulum. Duis commodo pellentesque augue, at laoreet ligula venenatis in. Praesent vitae tellus leo. Cras in massa risus.
    
    Ut ut ante tristique, efficitur tellus nec, porta nunc. Sed non nisl ante. Morbi et convallis turpis, in scelerisque sem. Vivamus ac bibendum lacus. Duis vehicula lorem velit, eu ultricies ante gravida ut. Integer porttitor consectetur quam vel porta. Quisque placerat turpis a dui mollis, vitae sodales magna faucibus. Nullam tempor ornare orci, ac placerat urna. Phasellus ut pretium mauris. Curabitur vitae nibh ex. Sed gravida pulvinar auctor. Nulla condimentum elit eget justo fringilla, in pharetra libero aliquet. Morbi porttitor iaculis turpis id interdum. Nunc id sollicitudin ligula. Phasellus vehicula quam enim, nec dictum ligula congue nec.
    
    Maecenas cursus scelerisque convallis. Quisque id tellus consequat justo varius auctor. Nam ultrices, urna sit amet tincidunt vulputate, nulla justo lobortis elit, vestibulum dignissim elit leo eget leo. Duis lorem augue, porta sed purus et, laoreet iaculis urna. Curabitur bibendum dapibus nisi in faucibus. Pellentesque pharetra tortor vitae nunc tincidunt ornare. Mauris sagittis maximus libero sed porttitor. Vestibulum sed tempus nisi. Nulla volutpat pharetra nisl in scelerisque.
    
    Phasellus placerat faucibus felis eu malesuada. Nunc vel sapien nulla. Vestibulum dignissim varius pellentesque. Etiam rhoncus, felis non porttitor fermentum, felis diam tincidunt diam, porttitor elementum erat eros eget ex. Aliquam euismod, nibh a pharetra luctus, sem leo lacinia odio, quis molestie enim eros a felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Quisque sollicitudin lorem magna, at condimentum nisl consectetur et. Aenean consectetur arcu at felis placerat fringilla. Pellentesque non cursus elit, in commodo eros. Nam sagittis sodales molestie.
    
    Vivamus ac aliquam ex. Integer bibendum magna et est rhoncus egestas. Vestibulum non velit augue. Duis pellentesque metus eget arcu dictum porta. Curabitur ac nibh ut arcu cursus accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis euismod mollis ipsum, congue laoreet sapien. Nam nec auctor nulla.
    
    Nulla et tellus non nunc ultrices tempor sed eu lorem. Aenean efficitur sapien purus, a eleifend arcu fermentum ac. Pellentesque elementum volutpat nunc at tempor. Praesent dignissim, quam in placerat egestas, erat justo dignissim erat, at auctor metus ante in risus. Etiam ac aliquet urna. Nunc bibendum in nibh ut porttitor. Donec ut felis et lacus sollicitudin imperdiet a quis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean felis justo, aliquet et pretium vitae, ultricies sed est. Nunc varius ante id sapien venenatis, in efficitur neque tincidunt. Aenean ultricies luctus posuere. Ut et vestibulum nisl. Aliquam bibendum justo ac nibh ullamcorper dignissim. Quisque et diam eu nunc auctor fringilla.
    
    Etiam semper aliquam aliquam. Nulla semper ante eu ipsum sollicitudin vehicula. Vivamus tristique gravida ante sit amet congue. Vivamus fermentum lacus non pulvinar mattis. In neque sapien, congue cursus mattis posuere, efficitur ut enim. In eget fringilla nisl. Sed justo felis, consectetur at nisi id, faucibus faucibus ex.
    
    Vestibulum ut quam nulla. Cras tristique sem in nunc finibus pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque purus nec pretium pulvinar. Donec viverra ipsum id eros consequat auctor. Aliquam sed elit nec mi bibendum consectetur nec ac justo. In nec aliquet arcu, eu tristique lectus. Morbi aliquet, leo eget placerat malesuada, leo arcu facilisis velit, et iaculis purus quam vel odio. Pellentesque luctus nunc vel sollicitudin laoreet. Morbi non lobortis felis. Duis leo nunc, finibus eu vestibulum sit amet, tempus sit amet lectus. Nulla facilisi. Aenean metus ante, aliquam et sem at, laoreet tempor libero. Duis congue nulla eu velit laoreet, ac lacinia augue elementum. Etiam nulla sem, dictum nec commodo a, placerat sit amet tellus. Integer a massa vel massa hendrerit bibendum quis pretium metus.
    
    Maecenas cursus et enim laoreet semper. Etiam maximus sapien dignissim odio accumsan, cursus pulvinar orci vehicula. Pellentesque ut laoreet metus. Mauris et tincidunt est, et vehicula nulla. Nunc erat tortor, malesuada a facilisis non, varius molestie quam. In eros turpis, condimentum fermentum ex eu, finibus sagittis turpis. Praesent id augue eget arcu tincidunt aliquam. Morbi mauris lorem, tempus vitae rutrum ut, dictum nec neque.
    
    Aliquam ligula lorem, dignissim in rutrum vel, rhoncus ut arcu. Integer dictum est at tortor tempus imperdiet. Etiam nisl orci, scelerisque ut tortor quis, hendrerit sodales mauris. Vestibulum interdum purus cursus consequat maximus. Vivamus nec mattis orci, id venenatis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ut fringilla dolor.
    
    Nulla a ultricies lorem. Nullam nunc felis, condimentum a dolor aliquet, gravida vestibulum orci. Curabitur justo lorem, cursus malesuada congue convallis, lobortis a justo. Fusce condimentum, nisl ac finibus aliquet, tortor elit bibendum diam, euismod interdum urna erat sed augue. Suspendisse imperdiet ex nibh, vitae fringilla orci blandit eget. Praesent malesuada magna at odio pharetra, ac vehicula ipsum aliquet. In porta, urna eu lacinia tincidunt, lorem mauris tincidunt velit, a hendrerit libero nunc eget risus. Sed iaculis nibh ac suscipit euismod.
    
    In efficitur sapien tortor, vitae hendrerit lorem scelerisque sit amet. In venenatis faucibus est dignissim tristique. Curabitur imperdiet nunc eu nunc finibus faucibus. Proin facilisis, nibh in facilisis sollicitudin, lacus ex ultricies libero, quis molestie lorem leo eu mauris. Praesent blandit nulla at nisl iaculis ultricies. Integer in aliquam nibh, nec blandit quam. Proin vel sapien venenatis, tristique mi ac, mollis nisi. Morbi pellentesque ornare nunc, non condimentum ligula.
    
    Mauris suscipit, massa nec tempor feugiat, dolor neque semper felis, ac pulvinar odio ante pulvinar neque. Curabitur vitae dui facilisis, scelerisque leo euismod, ornare augue. Vestibulum aliquet interdum velit, sit amet malesuada lorem vestibulum eu. Proin sed eleifend eros, ut facilisis nibh. Praesent bibendum fringilla congue. Aliquam semper nunc libero, et lobortis erat porta non. Fusce id lorem sodales, venenatis quam sit amet, rhoncus risus. Fusce libero arcu, semper nec laoreet ut, consequat in diam. Donec convallis, nibh vel pellentesque condimentum, massa orci pretium mi, at tristique urna sem vitae nisl. Donec pretium velit eget arcu euismod placerat. Maecenas nec consectetur nibh. Ut commodo lectus sed lectus finibus aliquet.
    
    Integer ullamcorper est sit amet massa mattis, at varius dolor ullamcorper. Sed sit amet cursus augue. Nullam ullamcorper posuere laoreet. Praesent in imperdiet magna. Donec malesuada, urna elementum tincidunt mattis, lacus dui imperdiet lorem, at feugiat sapien quam vel neque. Nulla sed risus justo. Aliquam rhoncus auctor commodo. Aliquam aliquet a ante non consequat. Aenean sed felis sem. Fusce justo tellus, tristique vel vehicula nec, mollis vel diam. In sed facilisis risus. Mauris eu dui libero. Nullam ut ipsum id tellus vulputate pellentesque. Aenean libero dui, auctor sit amet semper sit amet, mollis eget odio. Vestibulum volutpat mauris non consequat ultrices.`;
