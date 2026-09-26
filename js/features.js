// Educational Feature Modules for Pregnancy & Breastfeeding Procedure Safety Reference
// Fully localized using t(key, params), strict separation of product notes, no self-diagnosis, no external assets.

function renderCompareView(container, t, getSvgIcon, MATRIX, compareScenarios, onUpdateScenario, onReset) {
  const wrapper = document.createElement('div');
  wrapper.className = 'compare-container';

  // Controls Card
  const ctrlCard = document.createElement('div');
  ctrlCard.className = 'compare-controls-card';

  const headerRow = document.createElement('div');
  headerRow.className = 'compare-header-row';

  const title = document.createElement('div');
  title.className = 'compare-title';
  title.textContent = t('compare.title');

  const resetBtn = document.createElement('button');
  resetBtn.type = 'button';
  resetBtn.className = 'btn-secondary';
  resetBtn.textContent = t('compare.clear_btn');
  resetBtn.addEventListener('click', onReset);

  headerRow.appendChild(title);
  headerRow.appendChild(resetBtn);

  const subtitle = document.createElement('div');
  subtitle.className = 'compare-subtitle';
  subtitle.textContent = t('compare.subtitle');

  ctrlCard.appendChild(headerRow);
  ctrlCard.appendChild(subtitle);

  // 3-Column Selectors Grid
  const colsGrid = document.createElement('div');
  colsGrid.className = 'compare-cols-grid';

  const procOptions = [
    { val: '', textKey: 'compare.select_proc' },
    { val: 'tattoo', textKey: 'proc.tattoo' },
    { val: 'piercing', textKey: 'proc.piercing' },
    { val: 'earlobe', textKey: 'proc.earlobe' },
    { val: 'pmu', textKey: 'proc.pmu' },
    { val: 'removal', textKey: 'proc.removal' }
  ];

  const stageOptions = [
    { val: '', textKey: 'compare.select_stage' },
    { val: 'trying', textKey: 'stage.trying' },
    { val: 'first', textKey: 'stage.first' },
    { val: 'second', textKey: 'stage.second' },
    { val: 'third', textKey: 'stage.third' },
    { val: 'breastfeeding', textKey: 'stage.breastfeeding' }
  ];

  for (let i = 0; i < 3; i++) {
    const colBox = document.createElement('div');
    colBox.className = 'compare-col-selectors';

    const colHeading = document.createElement('div');
    colHeading.className = 'compare-col-heading';
    colHeading.textContent = t('compare.col_heading', { num: i + 1 });

    const pSel = document.createElement('select');
    pSel.className = 'input-field';
    pSel.setAttribute('aria-label', `${t('compare.col_heading', { num: i + 1 })}: ${t('compare.select_proc')}`);
    procOptions.forEach(opt => {
      const o = document.createElement('option');
      o.value = opt.val;
      o.textContent = t(opt.textKey);
      pSel.appendChild(o);
    });
    pSel.value = compareScenarios[i].proc;
    pSel.addEventListener('change', (e) => {
      onUpdateScenario(i, e.target.value, compareScenarios[i].stage);
    });

    const sSel = document.createElement('select');
    sSel.className = 'input-field';
    sSel.setAttribute('aria-label', `${t('compare.col_heading', { num: i + 1 })}: ${t('compare.select_stage')}`);
    stageOptions.forEach(opt => {
      const o = document.createElement('option');
      o.value = opt.val;
      o.textContent = t(opt.textKey);
      sSel.appendChild(o);
    });
    sSel.value = compareScenarios[i].stage;
    sSel.addEventListener('change', (e) => {
      onUpdateScenario(i, compareScenarios[i].proc, e.target.value);
    });

    colBox.appendChild(colHeading);
    colBox.appendChild(pSel);
    colBox.appendChild(sSel);
    colsGrid.appendChild(colBox);
  }

  ctrlCard.appendChild(colsGrid);
  wrapper.appendChild(ctrlCard);

  // Active Selected Columns to Render
  const activeScenarios = compareScenarios.filter(s => s.proc && s.stage && MATRIX[s.proc] && MATRIX[s.proc][s.stage]);

  if (activeScenarios.length < 2) {
    const promptBox = document.createElement('div');
    promptBox.className = 'prompt-card';
    const pIcon = document.createElement('div');
    pIcon.className = 'prompt-icon';
    pIcon.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
    const pText = document.createElement('p');
    pText.textContent = t('compare.prompt');
    promptBox.appendChild(pIcon);
    promptBox.appendChild(pText);
    wrapper.appendChild(promptBox);
  } else {
    const resultsGrid = document.createElement('div');
    resultsGrid.className = 'compare-grid-results';

    activeScenarios.forEach((scen, idx) => {
      const entry = MATRIX[scen.proc][scen.stage];
      const tier = entry.tier;
      const card = document.createElement('div');
      card.className = 'compare-card';

      // Header
      const cHeader = document.createElement('div');
      cHeader.className = 'compare-card-header';
      const cTitle = document.createElement('div');
      cTitle.className = 'compare-card-title';
      cTitle.textContent = t(`proc.${scen.proc}`);
      const cStage = document.createElement('div');
      cStage.className = 'compare-card-stage';
      cStage.textContent = t(`stage.${scen.stage}`);
      cHeader.appendChild(cTitle);
      cHeader.appendChild(cStage);
      card.appendChild(cHeader);

      // Conversation Priority Tier
      const pSec = document.createElement('div');
      pSec.className = 'compare-section';
      const pLabel = document.createElement('div');
      pLabel.className = 'compare-section-label';
      pLabel.textContent = t('compare.priority_label');
      const pBadge = document.createElement('div');
      pBadge.className = `priority-badge tier-${tier}`;
      pBadge.innerHTML = `${getSvgIcon(`priority-${tier}`)}<span>${t(`priority.${tier}.label`)}</span>`;
      pSec.appendChild(pLabel);
      pSec.appendChild(pBadge);
      card.appendChild(pSec);

      // Clinical Rationale
      const rSec = document.createElement('div');
      rSec.className = 'compare-section';
      const rLabel = document.createElement('div');
      rLabel.className = 'compare-section-label';
      rLabel.textContent = t('compare.rationale_label');
      const rBody = document.createElement('div');
      rBody.className = 'compare-section-body';
      rBody.textContent = t(`${scen.proc}.${scen.stage}.summary`);
      rSec.appendChild(rLabel);
      rSec.appendChild(rBody);
      card.appendChild(rSec);

      // Key Factors List
      const cSec = document.createElement('div');
      cSec.className = 'compare-section';
      const cLabel = document.createElement('div');
      cLabel.className = 'compare-section-label';
      cLabel.textContent = t('compare.considerations_label');
      const cList = document.createElement('ul');
      cList.className = 'compare-list';
      for (let c = 1; c <= entry.cCount; c++) {
        const li = document.createElement('li');
        li.textContent = t(`${scen.proc}.${scen.stage}.c${c}`);
        cList.appendChild(li);
      }
      cSec.appendChild(cLabel);
      cSec.appendChild(cList);
      card.appendChild(cSec);

      // Evidence basis
      const sSec = document.createElement('div');
      sSec.className = 'compare-section';
      const sLabel = document.createElement('div');
      sLabel.className = 'compare-section-label';
      sLabel.textContent = t('compare.source_label');
      const sBody = document.createElement('div');
      sBody.className = 'compare-section-body';
      sBody.textContent = t(`${scen.proc}.${scen.stage}.source`);
      sSec.appendChild(sLabel);
      sSec.appendChild(sBody);
      card.appendChild(sSec);

      resultsGrid.appendChild(card);
    });

    wrapper.appendChild(resultsGrid);
  }

  container.innerHTML = '';
  container.appendChild(wrapper);
}

function renderHospitalView(container, t, getSvgIcon) {
  const card = document.createElement('div');
  card.className = 'feature-view-card';

  const header = document.createElement('div');
  header.className = 'feature-view-header';
  const title = document.createElement('div');
  title.className = 'feature-view-title';
  title.textContent = t('hospital.title');
  const subtitle = document.createElement('div');
  subtitle.className = 'feature-view-subtitle';
  subtitle.textContent = t('hospital.subtitle');
  const intro = document.createElement('div');
  intro.className = 'feature-view-intro';
  intro.textContent = t('hospital.intro');

  header.appendChild(title);
  header.appendChild(subtitle);
  header.appendChild(intro);
  card.appendChild(header);

  // 5 Clinical Risk Checklist Items
  const list = document.createElement('div');
  list.className = 'feature-checklist';

  for (let i = 1; i <= 5; i++) {
    const item = document.createElement('div');
    item.className = 'feature-check-item';
    const itemTitle = document.createElement('div');
    itemTitle.className = 'feature-item-title';
    itemTitle.innerHTML = `${getSvgIcon('info')}<span>${t(`hospital.item${i}_title`)}</span>`;
    const itemDesc = document.createElement('div');
    itemDesc.className = 'feature-item-desc';
    itemDesc.textContent = t(`hospital.item${i}_desc`);
    item.appendChild(itemTitle);
    item.appendChild(itemDesc);
    list.appendChild(item);
  }
  card.appendChild(list);

  // 36-Week Midwife Action Points
  const actionSec = document.createElement('div');
  actionSec.className = 'feature-check-item';
  const actionTitle = document.createElement('div');
  actionTitle.className = 'feature-item-title';
  actionTitle.innerHTML = `${getSvgIcon('clipboard')}<span>${t('hospital.action_title')}</span>`;
  actionSec.appendChild(actionTitle);

  const actionList = document.createElement('ul');
  actionList.className = 'compare-list';
  for (let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    li.textContent = t(`hospital.action${i}`);
    actionList.appendChild(li);
  }
  actionSec.appendChild(actionList);
  card.appendChild(actionSec);

  // Separated Product Note: Non-Metallic Inert Retainers
  const prodSec = document.createElement('div');
  prodSec.className = 'product-note-section';
  const prodTitle = document.createElement('div');
  prodTitle.className = 'product-note-title';
  prodTitle.innerHTML = `${getSvgIcon('info')}<span>${t('hospital.product_note_title')}</span>`;
  const prodBody = document.createElement('p');
  prodBody.className = 'product-note-body';
  prodBody.textContent = t('hospital.product_note_body');
  prodSec.appendChild(prodTitle);
  prodSec.appendChild(prodBody);
  card.appendChild(prodSec);

  container.innerHTML = '';
  container.appendChild(card);
}

function renderNavelView(container, t, getSvgIcon) {
  const card = document.createElement('div');
  card.className = 'feature-view-card';

  const header = document.createElement('div');
  header.className = 'feature-view-header';
  const title = document.createElement('div');
  title.className = 'feature-view-title';
  title.textContent = t('navel.title');
  const subtitle = document.createElement('div');
  subtitle.className = 'feature-view-subtitle';
  subtitle.textContent = t('navel.subtitle');
  const intro = document.createElement('div');
  intro.className = 'feature-view-intro';
  intro.textContent = t('navel.intro');

  header.appendChild(title);
  header.appendChild(subtitle);
  header.appendChild(intro);
  card.appendChild(header);

  // 3-Trimester Grid with Pure Inline SVG Mechanical Stress Diagrams
  const trimGrid = document.createElement('div');
  trimGrid.className = 'navel-trimester-grid';

  const svgs = [
    // Trimester 1: Resting vertical geometry
    `<svg width="100%" height="130" viewBox="0 0 200 130" aria-label="First Trimester Resting Geometry Diagram">
      <defs>
        <linearGradient id="skinGrad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--border)" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="var(--border)" stop-opacity="0.05"/>
        </linearGradient>
      </defs>
      <!-- Skin surface & umbilical cup -->
      <path d="M 20 40 Q 80 40 90 70 Q 100 85 110 70 Q 120 40 180 40" fill="none" stroke="var(--text-muted)" stroke-width="2.5"/>
      <path d="M 20 40 Q 80 40 90 70 Q 100 85 110 70 Q 120 40 180 40 L 180 120 L 20 120 Z" fill="url(#skinGrad1)"/>
      <!-- Piercing tract & barbell -->
      <line x1="95" y1="36" x2="100" y2="70" stroke="var(--primary)" stroke-width="3" stroke-linecap="round"/>
      <circle cx="95" cy="35" r="5" fill="var(--primary)"/>
      <circle cx="100" cy="71" r="6" fill="var(--primary)"/>
      <!-- Resting labels -->
      <text x="100" y="112" text-anchor="middle" font-size="10" fill="var(--text-muted)" font-weight="600">Resting Depth: Normal</text>
    </svg>`,

    // Trimester 2: Lateral stretching & beginning of cup flattening
    `<svg width="100%" height="130" viewBox="0 0 200 130" aria-label="Second Trimester Lateral Tension Diagram">
      <defs>
        <linearGradient id="skinGrad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--priority-2-border)" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="var(--border)" stop-opacity="0.05"/>
        </linearGradient>
      </defs>
      <!-- Flattening abdominal wall -->
      <path d="M 20 50 Q 80 50 95 65 Q 100 70 105 65 Q 120 50 180 50" fill="none" stroke="var(--text-muted)" stroke-width="2.5"/>
      <path d="M 20 50 Q 80 50 95 65 Q 100 70 105 65 Q 120 50 180 50 L 180 120 L 20 120 Z" fill="url(#skinGrad2)"/>
      <!-- Piercing tilted under tension -->
      <line x1="92" y1="47" x2="103" y2="67" stroke="var(--priority-2-text)" stroke-width="3" stroke-linecap="round"/>
      <circle cx="92" cy="46" r="5" fill="var(--priority-2-text)"/>
      <circle cx="103" cy="68" r="6" fill="var(--priority-2-text)"/>
      <!-- Lateral tension arrows -->
      <path d="M 50 42 L 35 42 M 38 39 L 35 42 L 38 45" stroke="var(--priority-2-text)" stroke-width="2" fill="none"/>
      <path d="M 150 42 L 165 42 M 162 39 L 165 42 L 162 45" stroke="var(--priority-2-text)" stroke-width="2" fill="none"/>
      <text x="100" y="112" text-anchor="middle" font-size="10" fill="var(--priority-2-text)" font-weight="600">Lateral Shearing Begins</text>
    </svg>`,

    // Trimester 3: Complete eversion & severe outward shearing
    `<svg width="100%" height="130" viewBox="0 0 200 130" aria-label="Third Trimester Outward Distension Diagram">
      <defs>
        <linearGradient id="skinGrad3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--priority-1-border)" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="var(--border)" stop-opacity="0.05"/>
        </linearGradient>
      </defs>
      <!-- Convex everted umbilical dome -->
      <path d="M 20 70 Q 70 65 90 45 Q 100 38 110 45 Q 130 65 180 70" fill="none" stroke="var(--priority-1-text)" stroke-width="2.5"/>
      <path d="M 20 70 Q 70 65 90 45 Q 100 38 110 45 Q 130 65 180 70 L 180 120 L 20 120 Z" fill="url(#skinGrad3)"/>
      <!-- Piercing under severe outward extrusion force -->
      <line x1="88" y1="48" x2="112" y2="44" stroke="var(--priority-1-text)" stroke-width="3" stroke-linecap="round"/>
      <circle cx="87" cy="48" r="5" fill="var(--priority-1-text)"/>
      <circle cx="113" cy="44" r="6" fill="var(--priority-1-text)"/>
      <!-- Severe tension indicators -->
      <path d="M 100 30 L 100 18 M 97 22 L 100 18 L 103 22" stroke="var(--priority-1-text)" stroke-width="2" fill="none"/>
      <text x="100" y="112" text-anchor="middle" font-size="10" fill="var(--priority-1-text)" font-weight="600">Thinning Dermis / Extrusion Risk</text>
    </svg>`
  ];

  for (let i = 1; i <= 3; i++) {
    const tCard = document.createElement('div');
    tCard.className = 'navel-trimester-card';

    const svgWrap = document.createElement('div');
    svgWrap.className = 'navel-svg-wrap';
    svgWrap.innerHTML = svgs[i - 1];

    const tTitle = document.createElement('div');
    tTitle.className = 'feature-item-title';
    tTitle.textContent = t(`navel.t${i}_title`);

    const tDesc = document.createElement('div');
    tDesc.className = 'feature-item-desc';
    tDesc.textContent = t(`navel.t${i}_desc`);

    tCard.appendChild(svgWrap);
    tCard.appendChild(tTitle);
    tCard.appendChild(tDesc);
    trimGrid.appendChild(tCard);
  }
  card.appendChild(trimGrid);

  // Key Mechanical Stress Points
  const stressSec = document.createElement('div');
  stressSec.className = 'feature-check-item';
  const stressTitle = document.createElement('div');
  stressTitle.className = 'feature-item-title';
  stressTitle.innerHTML = `${getSvgIcon('info')}<span>${t('navel.stress_points_title')}</span>`;
  stressSec.appendChild(stressTitle);

  const stressList = document.createElement('ul');
  stressList.className = 'compare-list';
  for (let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    li.textContent = t(`navel.stress_p${i}`);
    stressList.appendChild(li);
  }
  stressSec.appendChild(stressList);

  // Link to sibling Jewelry Size Visualizer (target="_top", absolute URL)
  const linkP = document.createElement('p');
  linkP.className = 'feature-item-desc';
  linkP.style.marginTop = '0.5rem';
  linkP.innerHTML = `${t('navel.sizing_link_prefix')} <a href="https://poliinternational.com/jewelry-size-visualizer/" target="_top"><strong>${t('navel.sizing_link_text')}</strong></a>${t('navel.sizing_link_suffix')}`;
  stressSec.appendChild(linkP);

  card.appendChild(stressSec);

  // Separated Product Note: Flexible Umbilical Retainers
  const prodSec = document.createElement('div');
  prodSec.className = 'product-note-section';
  const prodTitle = document.createElement('div');
  prodTitle.className = 'product-note-title';
  prodTitle.innerHTML = `${getSvgIcon('info')}<span>${t('navel.product_note_title')}</span>`;
  const prodBody = document.createElement('p');
  prodBody.className = 'product-note-body';
  prodBody.textContent = t('navel.product_note_body');
  prodSec.appendChild(prodTitle);
  prodSec.appendChild(prodBody);
  card.appendChild(prodSec);

  container.innerHTML = '';
  container.appendChild(card);
}

function renderNippleView(container, t, getSvgIcon) {
  const card = document.createElement('div');
  card.className = 'feature-view-card';

  const header = document.createElement('div');
  header.className = 'feature-view-header';
  const title = document.createElement('div');
  title.className = 'feature-view-title';
  title.textContent = t('nipple.title');
  const subtitle = document.createElement('div');
  subtitle.className = 'feature-view-subtitle';
  subtitle.textContent = t('nipple.subtitle');
  const intro = document.createElement('div');
  intro.className = 'feature-view-intro';
  intro.textContent = t('nipple.intro');

  header.appendChild(title);
  header.appendChild(subtitle);
  header.appendChild(intro);
  card.appendChild(header);

  // Choking & Airway Warning Callout
  const chokingBox = document.createElement('div');
  chokingBox.className = 'triage-action-box';
  chokingBox.style.background = 'var(--priority-1-tag-bg)';
  chokingBox.style.color = 'var(--priority-1-tag-text)';
  chokingBox.style.border = '1px solid var(--priority-1-tag-border)';
  chokingBox.style.marginBottom = '1rem';

  const chokingTitle = document.createElement('div');
  chokingTitle.style.fontWeight = '800';
  chokingTitle.style.marginBottom = '0.35rem';
  chokingTitle.innerHTML = `${getSvgIcon('priority-1')} <span>${t('nipple.choking_title')}</span>`;
  const chokingDesc = document.createElement('div');
  chokingDesc.textContent = t('nipple.choking_desc');
  chokingBox.appendChild(chokingTitle);
  chokingBox.appendChild(chokingDesc);
  card.appendChild(chokingBox);

  // Core Sections: Mechanics, Latch, Support, Infection
  const sections = [
    { titleKey: 'nipple.mech_title', descKey: 'nipple.mech_desc', icon: 'info' },
    { titleKey: 'nipple.latch_title', descKey: 'nipple.latch_desc', icon: 'info' },
    { titleKey: 'nipple.consult_title', descKey: 'nipple.consult_desc', icon: 'stethoscope' },
    { titleKey: 'nipple.infection_title', descKey: 'nipple.infection_desc', icon: 'priority-2' }
  ];

  const list = document.createElement('div');
  list.className = 'feature-checklist';

  sections.forEach(sec => {
    const item = document.createElement('div');
    item.className = 'feature-check-item';
    const sTitle = document.createElement('div');
    sTitle.className = 'feature-item-title';
    sTitle.innerHTML = `${getSvgIcon(sec.icon)}<span>${t(sec.titleKey)}</span>`;
    const sDesc = document.createElement('div');
    sDesc.className = 'feature-item-desc';
    sDesc.textContent = t(sec.descKey);
    item.appendChild(sTitle);
    item.appendChild(sDesc);
    list.appendChild(item);
  });
  card.appendChild(list);

  container.innerHTML = '';
  container.appendChild(card);
}

function renderPostpartumView(container, t, getSvgIcon) {
  const card = document.createElement('div');
  card.className = 'feature-view-card';

  const header = document.createElement('div');
  header.className = 'feature-view-header';
  const title = document.createElement('div');
  title.className = 'feature-view-title';
  title.textContent = t('postpartum.title');
  const subtitle = document.createElement('div');
  subtitle.className = 'feature-view-subtitle';
  subtitle.textContent = t('postpartum.subtitle');
  const intro = document.createElement('div');
  intro.className = 'feature-view-intro';
  intro.textContent = t('postpartum.intro');

  header.appendChild(title);
  header.appendChild(subtitle);
  header.appendChild(intro);
  card.appendChild(header);

  // 4 Educational Milestone Phases
  const list = document.createElement('div');
  list.className = 'feature-checklist';

  for (let i = 1; i <= 4; i++) {
    const item = document.createElement('div');
    item.className = 'feature-check-item';
    const itemTitle = document.createElement('div');
    itemTitle.className = 'feature-item-title';
    itemTitle.innerHTML = `${getSvgIcon('info')}<span>${t(`postpartum.p${i}_title`)}</span>`;
    const itemDesc = document.createElement('div');
    itemDesc.className = 'feature-item-desc';
    itemDesc.textContent = t(`postpartum.p${i}_desc`);
    item.appendChild(itemTitle);
    item.appendChild(itemDesc);
    list.appendChild(item);
  }
  card.appendChild(list);

  // Provider Discussion Advisory
  const advSec = document.createElement('div');
  advSec.className = 'feature-check-item';
  const advTitle = document.createElement('div');
  advTitle.className = 'feature-item-title';
  advTitle.innerHTML = `${getSvgIcon('stethoscope')}<span>${t('postpartum.closing_title')}</span>`;
  const advDesc = document.createElement('div');
  advDesc.className = 'feature-item-desc';
  advDesc.textContent = t('postpartum.closing_desc');
  advSec.appendChild(advTitle);
  advSec.appendChild(advDesc);
  card.appendChild(advSec);

  container.innerHTML = '';
  container.appendChild(card);
}

function renderTriageView(container, t, getSvgIcon) {
  const card = document.createElement('div');
  card.className = 'feature-view-card';

  const header = document.createElement('div');
  header.className = 'feature-view-header';
  const title = document.createElement('div');
  title.className = 'feature-view-title';
  title.textContent = t('triage.title');
  const subtitle = document.createElement('div');
  subtitle.className = 'feature-view-subtitle';
  subtitle.textContent = t('triage.subtitle');
  const intro = document.createElement('div');
  intro.className = 'feature-view-intro';
  intro.textContent = t('triage.intro');

  header.appendChild(title);
  header.appendChild(subtitle);
  header.appendChild(intro);
  card.appendChild(header);

  // 2-Column Comparison Layout: Mechanical vs Urgent Medical
  const grid = document.createElement('div');
  grid.className = 'triage-grid';

  // Left: Mechanical Irritation
  const leftCol = document.createElement('div');
  leftCol.className = 'triage-col mechanical';
  const leftTitle = document.createElement('div');
  leftTitle.className = 'triage-col-title';
  leftTitle.innerHTML = `${getSvgIcon('priority-2')}<span>${t('triage.cat_mechanical')}</span>`;
  leftCol.appendChild(leftTitle);

  const leftList = document.createElement('ul');
  leftList.className = 'compare-list';
  for (let i = 1; i <= 4; i++) {
    const li = document.createElement('li');
    li.textContent = t(`triage.mech_sym${i}`);
    leftList.appendChild(li);
  }
  leftCol.appendChild(leftList);

  const leftAction = document.createElement('div');
  leftAction.className = 'triage-action-box';
  leftAction.textContent = t('triage.mech_action');
  leftCol.appendChild(leftAction);

  // Right: Urgent Medical Review
  const rightCol = document.createElement('div');
  rightCol.className = 'triage-col medical';
  const rightTitle = document.createElement('div');
  rightTitle.className = 'triage-col-title';
  rightTitle.innerHTML = `${getSvgIcon('priority-1')}<span>${t('triage.cat_medical')}</span>`;
  rightCol.appendChild(rightTitle);

  const rightList = document.createElement('ul');
  rightList.className = 'compare-list';
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement('li');
    li.textContent = t(`triage.med_sym${i}`);
    rightList.appendChild(li);
  }
  rightCol.appendChild(rightList);

  const rightAction = document.createElement('div');
  rightAction.className = 'triage-action-box';
  rightAction.textContent = t('triage.med_action');
  rightCol.appendChild(rightAction);

  grid.appendChild(leftCol);
  grid.appendChild(rightCol);
  card.appendChild(grid);

  container.innerHTML = '';
  container.appendChild(card);
}

// Search Results Renderer for Clinical Topics and Guidelines
function renderSearchResultsView(container, t, getSvgIcon, results, query, onSelectResult) {
  container.innerHTML = '';

  if (!results || results.length === 0) {
    const noRes = document.createElement('div');
    noRes.className = 'search-no-results';

    const iconWrap = document.createElement('div');
    iconWrap.className = 'search-no-results-icon';
    iconWrap.innerHTML = getSvgIcon('info');

    const title = document.createElement('div');
    title.className = 'search-no-results-title';
    title.textContent = t('search.no_results_title');

    const desc = document.createElement('div');
    desc.className = 'search-no-results-desc';
    desc.textContent = t('search.no_results_desc');

    noRes.appendChild(iconWrap);
    noRes.appendChild(title);
    noRes.appendChild(desc);
    container.appendChild(noRes);
    return;
  }

  const wrapper = document.createElement('div');
  wrapper.className = 'search-results-container';

  const header = document.createElement('div');
  header.className = 'search-results-header';

  const countEl = document.createElement('div');
  countEl.className = 'search-results-count';
  countEl.textContent = t('search.results_count', { count: results.length, query: query });
  header.appendChild(countEl);
  wrapper.appendChild(header);

  results.forEach(item => {
    const card = document.createElement('div');
    card.className = 'search-result-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    // Card Meta (Badge + Tier if applicable)
    const metaRow = document.createElement('div');
    metaRow.className = 'search-card-meta';

    const badge = document.createElement('span');
    badge.className = 'search-category-badge';
    badge.textContent = item.category === 'procedure'
      ? t('search.item_category_procedure')
      : t('search.item_category_guideline');
    metaRow.appendChild(badge);

    if (item.tier) {
      const tierTag = document.createElement('span');
      tierTag.className = `priority-tier-tag tier-${item.tier}`;
      tierTag.textContent = t(`priority.tier${item.tier}_tag`);
      metaRow.appendChild(tierTag);
    }
    card.appendChild(metaRow);

    // Card Title
    const title = document.createElement('div');
    title.className = 'search-card-title';
    title.innerHTML = `<span>${item.title}</span> ${getSvgIcon('link-arrow')}`;
    card.appendChild(title);

    // Card Description / Clinical Rationale
    if (item.desc) {
      const desc = document.createElement('div');
      desc.className = 'search-card-desc';
      desc.textContent = item.desc;
      card.appendChild(desc);
    }

    // Snippets / Highlight Tags
    if (item.snippets && item.snippets.length > 0) {
      const snips = document.createElement('div');
      snips.className = 'search-card-snippets';
      item.snippets.slice(0, 3).forEach(snip => {
        const tag = document.createElement('span');
        tag.className = 'search-snippet-tag';
        tag.textContent = snip;
        snips.appendChild(tag);
      });
      card.appendChild(snips);
    }

    // Card Footer
    const footer = document.createElement('div');
    footer.className = 'search-card-footer';

    const actionBtn = document.createElement('span');
    actionBtn.className = 'search-view-btn';
    actionBtn.textContent = t('search.view_action');
    footer.appendChild(actionBtn);
    card.appendChild(footer);

    // Click & Keyboard handlers
    const activate = () => onSelectResult(item);
    card.addEventListener('click', activate);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activate();
      }
    });

    wrapper.appendChild(card);
  });

  container.appendChild(wrapper);
}

