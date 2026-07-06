'use strict';

function escHtml(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// level: 'safe' | 'caution' | 'avoid'
const MATRIX = {
  tattoo: {
    trying:       { level:'caution', icon:'⚠️', label:'Use caution', sub:'Low direct risk, limited data', summary:'No evidence that tattoo inks cause teratogenic effects during conception attempts, but data is limited. Ink pigments can enter lymphatic tissue and systemic circulation. If planning a pregnancy within weeks, consider waiting.', risks:['Limited data on systemic pigment absorption during conception window','Infection risk if healing coincides with early implantation period','Ink composition varies widely — EU Regulation 2020/2081 compliant inks preferred'] },
    first:        { level:'avoid',   icon:'🚫', label:'Avoid',       sub:'Critical developmental period', summary:'The first trimester is the most critical developmental window. Any systemic infection, immune response, or stress during this period carries elevated risk. Ink compounds entering lymphatic tissue are not fully studied for fetal safety.', risks:['Organogenesis occurs weeks 3–8 — systemic inflammatory response is a concern','Ink absorption into lymph nodes is documented; fetal effects unstudied','Increased infection susceptibility during first-trimester immune adjustment','Most reputable tattoo artists will decline to tattoo pregnant clients'] },
    second:       { level:'caution', icon:'⚠️', label:'Use caution', sub:'Lower risk but not risk-free', summary:'Second trimester is generally considered lower risk for new procedures, but the infection risk from any skin-breaking procedure remains. Skin stretching and hormonal changes can affect healing and final ink appearance.', risks:['Skin changes during pregnancy may alter ink saturation and spread','Immune response to ink is unpredictable during hormonal fluctuation','Lying in tattoo positions may be uncomfortable and restrict blood flow','Any infection during pregnancy carries elevated complication risk'] },
    third:        { level:'avoid',   icon:'🚫', label:'Avoid',       sub:'High complication risk', summary:'Third trimester is inadvisable for new tattoos. Physical positioning is difficult, immune function is altered, and any infection or inflammatory response is particularly serious close to delivery. Ink longevity is also unpredictable due to skin stretching.', risks:['Difficulty positioning for extended tattoo sessions','Any infection close to delivery can affect birth outcome','Skin elasticity changes permanently alter tattoo appearance postpartum','Blood flow adjustments in late pregnancy affect healing'] },
    breastfeeding:{ level:'caution', icon:'⚠️', label:'Use caution', sub:'Limited transfer data', summary:'No established evidence that tattoo inks transfer meaningfully to breast milk, but data is genuinely limited. Most professional guidance suggests waiting until after breastfeeding is complete. If proceeding, ensure a hygienic studio and strict aftercare to avoid any infection while nursing.', risks:['Limited data on ink metabolite transfer into breast milk','Infection during breastfeeding carries elevated risk to the nursing infant','Stress response to new tattoo may temporarily affect milk supply','Most professional bodies recommend waiting until breastfeeding ends'] },
  },

  piercing: {
    trying:       { level:'caution', icon:'⚠️', label:'Use caution', sub:'Low risk with good hygiene', summary:'Body piercings during the conception window carry minimal direct risk if performed in a sterile environment with proper aftercare. The main concern is any infection overlapping with early pregnancy before you know you are pregnant. Consider timing away from your expected fertile window.', risks:['Infection risk if healing overlaps with undetected early pregnancy','Nickel or non-implant-grade materials can trigger systemic inflammatory response','Ensure APP-certified piercer and implant-grade materials (titanium or BioFlex®)'] },
    first:        { level:'avoid',   icon:'🚫', label:'Avoid',       sub:'Infection risk to developing fetus', summary:'New piercings during the first trimester are inadvisable. Any infection poses elevated risk during organogenesis, and the body\'s altered immune state may impair normal healing. The fistula healing process requires consistent immune resources.', risks:['Infection during organogenesis (weeks 3–8) carries serious fetal risk','Altered immune function in first trimester impairs healing and increases rejection risk','Nausea and fatigue affect aftercare compliance','Most APP-certified piercers will decline to pierce pregnant clients'] },
    second:       { level:'caution', icon:'⚠️', label:'Use caution — avoid navel', sub:'Physical changes affect suitability', summary:'Second trimester piercings carry moderate risk. Navel piercings should be avoided entirely as abdominal expansion will cause migration or rejection. Other piercings may be considered with strict hygiene protocols, but the healing process will be affected by hormonal and immune changes.', risks:['Navel piercings will migrate or reject as abdomen expands — do not proceed','Blood vessel dilation during pregnancy increases bleeding at piercing sites','Hormonal changes increase skin sensitivity and alter healing speed','Use only implant-grade titanium or BioFlex® — no steel or acrylic'] },
    third:        { level:'avoid',   icon:'🚫', label:'Avoid',       sub:'Not recommended', summary:'New piercings in the third trimester are strongly inadvisable. Physical positioning is challenging, immune function is altered, and any infection close to delivery is a significant complication risk. Healing will not complete before delivery.', risks:['Physical positioning is uncomfortable and may restrict blood flow','Any active piercing healing at time of delivery creates infection vector risk','Immune changes prevent normal fistula formation close to term','Body changes post-delivery will likely affect piercing placement'] },
    breastfeeding:{ level:'caution', icon:'⚠️', label:'Avoid nipple piercings', sub:'Other sites generally low-risk', summary:'Nipple piercings should be avoided during breastfeeding entirely — infection risk and interference with milk ducts. Other body piercings carry standard risk with the additional consideration that any infection during nursing requires antibiotic treatment that may affect the infant.', risks:['Nipple piercings during nursing create infection risk directly at milk ducts — do not proceed','Any infection requiring antibiotics while breastfeeding affects the nursing infant','BioFlex® recommended for all new piercings during this period for minimal tissue stress','Stress response and sleep deprivation in postpartum period impairs healing'] },
  },

  earlobe: {
    trying:       { level:'safe',    icon:'✅', label:'Generally safe', sub:'Low-risk procedure', summary:'Earlobe piercings carry minimal systemic risk and are generally considered low-risk during the conception window. Use a reputable studio with sterilised equipment and implant-grade titanium starter jewellery.', risks:['Standard infection risk applies — use sterile technique and saline aftercare','Avoid non-implant-grade metals (surgical steel contains nickel)'] },
    first:        { level:'caution', icon:'⚠️', label:'Low risk — proceed carefully', sub:'Minimal direct risk', summary:'Earlobe piercings present very low systemic risk, but any infection during first trimester carries elevated concern. If proceeding, choose a certified studio with autoclave sterilisation, titanium jewellery, and strict aftercare.', risks:['Any infection during first trimester, even minor, warrants prompt treatment','Morning sickness may impair aftercare compliance','Inform your piercer of your pregnancy so they can adjust positioning and timing'] },
    second:       { level:'safe',    icon:'✅', label:'Generally safe', sub:'Standard precautions apply', summary:'Earlobe piercings during the second trimester are generally considered low-risk. The primary concern is maintaining strict aftercare to prevent infection. Ensure implant-grade titanium jewellery and daily saline cleaning.', risks:['Standard infection risk — saline aftercare twice daily','Hormonal changes may slightly alter healing speed','Avoid nickel-containing metals throughout pregnancy'] },
    third:        { level:'caution', icon:'⚠️', label:'Low risk — consider timing', sub:'Close to term', summary:'Earlobe piercings in the third trimester carry minimal direct risk but any active healing wound at time of delivery is a minor consideration. Most practitioners consider this low-risk.', risks:['Minor infection risk close to delivery','Ensure healing is established before birth if possible','Standard saline aftercare required'] },
    breastfeeding:{ level:'safe',    icon:'✅', label:'Generally safe', sub:'Standard aftercare applies', summary:'Earlobe piercings during breastfeeding are generally considered safe. The systemic risk is negligible. Standard saline aftercare and implant-grade jewellery apply.', risks:['Standard infection risk — no elevated breastfeeding-specific concern','Ensure implant-grade titanium — avoid nickel-containing alloys'] },
  },

  pmu: {
    trying:       { level:'caution', icon:'⚠️', label:'Use caution', sub:'Pigment and anaesthetic concerns', summary:'Permanent makeup procedures involve pigment deposition and topical anaesthetics. Limited data exists on pigment safety during the conception window. Topical lidocaine absorption during early undetected pregnancy is a concern for some practitioners.', risks:['Topical anaesthetic (lidocaine) absorption during early undetected pregnancy — limited data','Pigment enters dermal lymphatic tissue — fetal safety unstudied','Consider waiting until after pregnancy and breastfeeding are complete'] },
    first:        { level:'avoid',   icon:'🚫', label:'Avoid',       sub:'Anaesthetic and pigment risk', summary:'Permanent makeup during first trimester is not recommended. Topical anaesthetics and dermal pigments are absorbed systemically and have not been studied for fetal safety during organogenesis.', risks:['Topical anaesthetics (lidocaine, EMLA) are contraindicated by most guidelines in first trimester','Pigment ingredients vary — EU 2020/2081 compliance does not confirm pregnancy safety','Immune response to PMU is unpredictable during first-trimester hormonal shifts','Most qualified PMU artists will decline pregnant clients'] },
    second:       { level:'caution', icon:'⚠️', label:'Use caution', sub:'Anaesthetic remains a concern', summary:'Second trimester carries lower risk than first, but topical anaesthetic use and pigment absorption remain unstudied. Many PMU practitioners decline to work on pregnant clients regardless of trimester.', risks:['Topical anaesthetic protocols need review against obstetric guidance','Skin colour and texture change during pregnancy can affect pigment outcome','Hormonal changes can cause unexpected immune response to pigments','Recommend waiting until post-breastfeeding for best results and minimum risk'] },
    third:        { level:'avoid',   icon:'🚫', label:'Avoid',       sub:'Not recommended close to term', summary:'Permanent makeup close to delivery is inadvisable. Any infection or inflammatory response near term carries elevated risk, and procedural positioning may be uncomfortable or affect blood flow.', risks:['Anaesthetic protocols unsuitable for late pregnancy','Infection risk close to delivery','Difficult procedural positioning in third trimester'] },
    breastfeeding:{ level:'caution', icon:'⚠️', label:'Use caution', sub:'Anaesthetic transfer concern', summary:'PMU during breastfeeding is generally considered lower risk than during pregnancy, but topical anaesthetic transfer to breast milk is not well studied. Some practitioners recommend waiting until breastfeeding is complete. If proceeding, minimal-anaesthetic protocols are preferable.', risks:['Lidocaine in breast milk: transfer is low but not zero — consult your midwife','Pigment absorption into lymphatic tissue continues post-procedure','Any post-procedure infection requires treatment that may affect nursing infant'] },
  },

  removal: {
    trying:       { level:'caution', icon:'⚠️', label:'Use caution', sub:'Fragmented pigment enters bloodstream', summary:'Laser tattoo removal fragments ink particles that are then processed by the immune system and excreted. The systemic load of fragmented pigments during the conception window is not studied. Consider completing removal before or significantly after any pregnancy.', risks:['Fragmented ink pigments circulate systemically during and after laser treatment','Inflammatory response from removal is significant — implications for conception window unclear','Lidocaine topical anaesthetic is commonly used at removal sites'] },
    first:        { level:'avoid',   icon:'🚫', label:'Avoid',       sub:'Systemic pigment load during organogenesis', summary:'Tattoo laser removal is contraindicated during the first trimester. Laser treatment fragments tattoo pigments into nanoparticles that circulate systemically before excretion. The implications of this systemic load during organogenesis have not been studied but the precautionary principle strongly applies.', risks:['Ink nanoparticles circulate in bloodstream post-treatment','Systemic immune activation during organogenesis is a significant concern','Most laser clinics will not treat pregnant clients','Anaesthetic protocols change during pregnancy'] },
    second:       { level:'avoid',   icon:'🚫', label:'Avoid',       sub:'Systemic pigment circulation', summary:'Tattoo removal during the second trimester remains inadvisable due to systemic pigment circulation. There is no established safe period for laser removal during pregnancy.', risks:['Fragmented pigment nanoparticles enter fetal circulation — unstudied safety profile','Immune activation from removal is significant','Wait until after breastfeeding is complete'] },
    third:        { level:'avoid',   icon:'🚫', label:'Avoid',       sub:'Not appropriate close to delivery', summary:'Tattoo removal in the third trimester is inadvisable for the same reasons as earlier trimesters, with the additional concern of any inflammatory response or infection close to delivery.', risks:['Same systemic pigment risk applies','Any inflammatory response close to delivery is a significant concern','Positioning difficulties in late pregnancy'] },
    breastfeeding:{ level:'avoid',   icon:'🚫', label:'Avoid during nursing', sub:'Pigment fragments may enter breast milk', summary:'Tattoo removal during breastfeeding is generally not recommended. Fragmented ink particles are processed hepatically and renally — trace amounts may potentially appear in breast milk. Most laser clinics recommend waiting until breastfeeding is complete.', risks:['Fragmented pigment metabolites and potential transfer to breast milk — unstudied','Inflammatory response from laser sessions may affect milk supply','Recommend waiting until nursing is complete for removal sessions'] },
  },
};

const procedureSel = document.getElementById('procedure');
const stageSel     = document.getElementById('stage');
const resultDiv    = document.getElementById('result');

function update() {
  const proc  = procedureSel.value;
  const stage = stageSel.value;
  if (!proc || !stage) { resultDiv.innerHTML = ''; return; }

  const d = MATRIX[proc] && MATRIX[proc][stage];
  if (!d) { resultDiv.innerHTML = ''; return; }

  const risksHtml = d.risks.map(r => `<li>${escHtml(r)}</li>`).join('');

  resultDiv.innerHTML = `
    <div class="result-card">
      <div class="safety-banner level-${escHtml(d.level)}">
        <span class="safety-icon">${d.icon}</span>
        <div>
          <div class="safety-label level-${escHtml(d.level)}">${escHtml(d.label)}</div>
          <div class="safety-sub">${escHtml(d.sub)}</div>
        </div>
      </div>
      <div class="result-section">
        <div class="result-section-title">Summary</div>
        <p class="result-body">${escHtml(d.summary)}</p>
      </div>
      <div class="result-section">
        <div class="result-section-title">Specific considerations</div>
        <ul class="risk-list">${risksHtml}</ul>
      </div>
      <div class="result-section">
        <div class="result-section-title">Always discuss with your healthcare provider</div>
        <p class="result-body">This reference cannot replace a conversation with your midwife, obstetrician, or GP. Individual health circumstances — including immune conditions, skin sensitivities, and obstetric history — may change the assessment significantly.</p>
      </div>
    </div>`;
}

procedureSel.addEventListener('change', update);
stageSel.addEventListener('change', update);
