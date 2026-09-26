/**
 * Pregnancy & Breastfeeding Procedure Safety Reference (V2)
 * Clinical & Studio Reference - Poli International
 *
 * All user-visible strings are loaded through t(key, params) from I18N_EN.
 */
'use strict';

const I18N_EN = {
  // Search Bar & Filter Strings
  'search.placeholder': 'Search clinical guidelines, topics, or materials (e.g., piercing, navel, mastitis)...',
  'search.clear_btn': 'Clear search',
  'search.filter_all': 'All Topics',
  'search.filter_procedures': 'Procedures',
  'search.filter_guidelines': 'Specialized Guidelines',
  'search.results_count': '{count} clinical topic(s) found for "{query}"',
  'search.no_results_title': 'No clinical topics found',
  'search.no_results_desc': 'Try searching for procedure types (tattoo, piercing, microblading), stages (first trimester, breastfeeding), or specific concerns (navel tension, infant airway, mastitis, infection signs).',
  'search.item_category_procedure': 'Procedure Safety Reference',
  'search.item_category_guideline': 'Clinical Topic & Guideline',
  'search.view_action': 'View topic',

  // Page Metadata
  'meta.title': 'Pregnancy & Breastfeeding Procedure Safety Reference | Poli International',
  'meta.description': 'Clinically reasoned starting point for conversations with your doctor or midwife about tattoo, piercing, and PMU procedures during pregnancy and breastfeeding.',

  // Header & Navigation
  'app.badge': 'Clinical & Studio Reference',
  'app.title': 'Pregnancy & Breastfeeding Procedure Safety',
  'app.subtitle': 'A clinically reasoned starting point for conversations with your doctor or midwife about tattoos, piercings, and permanent makeup.',
  'app.lang_label': 'Language:',

  // Language Dropdown Options
  'lang.en': 'English',
  'lang.de': 'Deutsch',
  'lang.fr': 'Français',
  'lang.es': 'Español',
  'lang.it': 'Italiano',
  'lang.nl': 'Nederlands',
  'lang.pt': 'Português',

  // Form Controls
  'form.procedure_label': 'Procedure type',
  'form.stage_label': 'Current stage',
  'form.procedure_placeholder': '- Select procedure -',
  'form.stage_placeholder': '- Select stage -',

  // Procedures
  'proc.tattoo': 'New tattoo',
  'proc.piercing': 'Body piercing (non-ear)',
  'proc.earlobe': 'Earlobe piercing',
  'proc.pmu': 'Permanent makeup / microblading',
  'proc.removal': 'Tattoo laser removal',

  // Stages
  'stage.trying': 'Trying to conceive (pre-conception window)',
  'stage.first': 'First trimester (weeks 1–12)',
  'stage.second': 'Second trimester (weeks 13–26)',
  'stage.third': 'Third trimester (weeks 27–40)',
  'stage.breastfeeding': 'Breastfeeding / postpartum',

  // Prompt / Empty State
  'prompt.title': 'Select a procedure and stage',
  'prompt.body': 'Select a body art procedure and your pregnancy or breastfeeding stage above to view tailored clinical talking points and a printable questions checklist.',

  // Priority Tier Headings
  'tier1.tag': 'Priority Tier 1: Early Discussion',
  'tier1.title': 'High priority to discuss with your healthcare provider',
  'tier1.sub': 'Active physiological, developmental, or tissue expansion factors warrant early clinical discussion before scheduling.',

  'tier2.tag': 'Priority Tier 2: Planned Discussion',
  'tier2.title': 'Planned discussion with your healthcare provider',
  'tier2.sub': 'Maternal physiological changes affect healing or placement; raise at your next scheduled antenatal visit.',

  'tier3.tag': 'Priority Tier 3: Routine Discussion',
  'tier3.title': 'Routine discussion with your healthcare provider',
  'tier3.sub': 'Lower procedural complexity; mention standard sterile protocols and aftercare to your care team.',

  // Section Titles
  'section.summary': 'Clinical Rationale',
  'section.considerations': 'Clinical & Physiological Considerations',
  'section.checklist': 'Questions for Your Doctor or Midwife',
  'section.checklist_intro': 'Check off the questions you wish to raise with your midwife, obstetrician, or GP at your next visit:',
  'section.provenance': 'Provenance & Evidence Basis',
  'section.authority_title': "Your Healthcare Provider's Authority",
  'section.authority_body': 'This tool provides general clinical talking points. Your doctor or midwife knows your individual medical history, gestational progress, and bloodwork, and is the sole clinical decision-maker for your care.',
  'section.product_note_title': 'Product Note: Piercing Jewellery Materials',
  'section.sibling_title': 'Related Clinical Reference Tools',
  'section.print_btn': 'Print Questions Checklist',
  'section.meta_reviewed': 'Last reviewed:',
  'section.meta_date': 'September 2026',
  'section.meta_source': 'Clinical review basis:',

  // Provenance Legal Instruments
  'provenance.eu_instrument_prefix': 'Official legislative instrument:',
  'provenance.eu_instrument_name': 'Commission Regulation (EU) 2020/2081 (REACH Annex XVII: Tattoo and PMU Inks)',

  // Printout Ruled Area & Header
  'print.doc_title': 'Healthcare Provider Discussion Reference',
  'print.patient_date': 'Date:',
  'print.notes_title': 'Provider Consultation Notes & Follow-up Plan',
  'print.patient_copy': 'Patient Appointment Discussion Copy',
  'print.clinician_signature': 'Clinician Signature: _______________________',
  'print.gestational_age': 'Gestation / Status: ________________',
  'print.footer_note': 'This reference provides general educational talking points for your antenatal or postnatal consultation. It does not replace individualized clinical assessment by your doctor or midwife.',

  // Product Note Text
  'product_note.body': 'Patrick Poli, creator of BioFlex® body jewelry, selected a PP-R (polypropylene random copolymer) for it so that the jewelry flexes with changing anatomical contours. Flexible materials such as BioFlex® body jewelry and implant-grade metals are low-reactivity options to discuss with a professional piercer for existing or healing piercings during pregnancy. PP-R is injection-moulded as one monolithic piece; it is not PTFE (which is machined from extruded rod). Consult your piercer and healthcare provider regarding jewelry choices during pregnancy.',

  // Disclaimer
  'disclaimer.title': 'Important Clinical Notice:',
  'disclaimer.body': 'This tool is an educational starting point and never substitutes for personal medical advice, diagnosis, or treatment. Always discuss any planned body art procedure with your midwife, obstetrician, or GP prior to booking.',

  // Sibling Tools
  'sibling.med_title': 'Medication Interaction Checker',
  'sibling.med_desc': 'Check how prescription treatments and common medications interact with body art procedures.',
  'sibling.migration_title': 'Piercing Migration & Rejection Risk',
  'sibling.migration_desc': 'Evaluate physical tension, depth, and anatomical movement factors affecting jewelry stability.',

  // ==========================================
  // TATTOO
  // ==========================================
  'tattoo.trying.summary': 'Tattoo pigments enter dermal tissue and regional lymphatic nodes. While no clinical evidence shows teratogenic effects during pre-conception, any localized skin infection during early implantation requires obstetric management.',
  'tattoo.trying.c1': 'Limited clinical trial data exists on systemic ink nanoparticle circulation during the conception window.',
  'tattoo.trying.c2': 'A severe localized skin infection requiring antibiotics during early implantation requires careful obstetric pharmaceutical selection.',
  'tattoo.trying.c3': 'Pigment composition varies; inks meeting Commission Regulation (EU) 2020/2081 restrict over 4,000 hazardous chemicals, aromatic amines, and heavy metals.',
  'tattoo.trying.c4': 'Planning procedures outside the expected fertile window allows confirmation of pregnancy status before undertaking healing.',
  'tattoo.trying.q1': 'If I conceive shortly after receiving a tattoo, does standard dermal healing affect implantation or early embryonic development?',
  'tattoo.trying.q2': 'Are there specific classes of antibiotics I must avoid if a skin infection arises while we are trying to conceive?',
  'tattoo.trying.q3': 'Is my hepatitis B immunity and tetanus vaccination status current before I undertake skin-breaking procedures?',
  'tattoo.trying.source': 'General clinical reasoning: no standalone pre-conception tattoo guideline published by ACOG or RCOG.',

  'tattoo.first.summary': 'The first trimester (weeks 1–12) is the primary window of fetal organogenesis. Any systemic maternal infection, prolonged fever, or inflammatory cascade during this period carries heightened clinical significance.',
  'tattoo.first.c1': 'Organogenesis occurs primarily between gestational weeks 3 and 8, when maternal physiological stability is paramount.',
  'tattoo.first.c2': 'Skin-breaking procedures carry baseline risks of bacterial inoculation (Staphylococcus, Streptococcus) and bloodborne pathogens.',
  'tattoo.first.c3': 'First-trimester nausea, hyperemesis, and immune adaptations can alter skin healing and daily aftercare compliance.',
  'tattoo.first.c4': 'Professional tattoo artists routinely decline elective tattooing during pregnancy as a risk-management protocol; discuss timing with your provider.',
  'tattoo.first.q1': 'What are the clinical concerns for fetal organogenesis if a skin-breaking procedure leads to an unexpected bacterial infection?',
  'tattoo.first.q2': 'How do early pregnancy immune changes affect wound healing, and what signs should trigger an immediate clinic call?',
  'tattoo.first.q3': 'If I have an existing tattoo still healing from before I knew I was pregnant, what specific symptoms should we monitor?',
  'tattoo.first.source': 'ACOG FAQ: Skin Conditions During Pregnancy; NHS Guidance on Pregnancy and Tattoos.',

  'tattoo.second.summary': 'The second trimester (weeks 13–26) is past the primary organogenesis phase, but maternal circulatory expansion, skin stretching, and fluid shifts continue to influence procedural comfort and healing.',
  'tattoo.second.c1': 'Increased maternal blood volume and cutaneous vasodilation can cause increased bleeding and bruising during tattooing.',
  'tattoo.second.c2': 'Rapid skin expansion over the abdomen, breasts, hips, and lower back will distort tattoo pigment alignment and long-term artwork geometry.',
  'tattoo.second.c3': 'Prolonged sitting or lying in static tattoo positions can cause inferior vena cava compression, reducing venous return and causing dizziness.',
  'tattoo.second.c4': 'Any skin infection acquired in the second trimester still requires prompt medical assessment and pregnancy-compatible therapeutics.',
  'tattoo.second.q1': 'Does my blood pressure, gestational diabetes status, or skin sensitivity introduce specific procedural risks?',
  'tattoo.second.q2': 'Which anatomical areas should be strictly avoided due to anticipated abdominal and skin expansion over the coming months?',
  'tattoo.second.q3': 'How might pregnancy-related blood volume changes affect procedural bleeding and overall healing time?',
  'tattoo.second.source': 'NHS Pregnancy and Body Art Advice; General clinical reasoning.',

  'tattoo.third.summary': 'In late pregnancy (weeks 27–40), physical positioning discomfort, late-stage fluid retention, and proximity to labor make new skin-breaking procedures an unnecessary complication risk.',
  'tattoo.third.c1': 'An active open skin wound or unresolved bacterial infection at the time of labor and hospital admission complicates obstetric care.',
  'tattoo.third.c2': 'Supine positioning (lying flat on the back) during extended tattoo sessions triggers supine hypotensive syndrome due to uterine pressure on the vena cava.',
  'tattoo.third.c3': 'Generalized fluid retention (edema) and significant skin distension make precise ink depth and saturation difficult to control.',
  'tattoo.third.c4': 'Procedural stress and prolonged pain can induce maternal tachycardia and physical fatigue close to term.',
  'tattoo.third.q1': 'What complications would an active healing tattoo wound cause during hospital admission for labor and delivery?',
  'tattoo.third.q2': 'How does third-trimester fluid retention affect skin healing, ink dispersion, and infection vulnerability?',
  'tattoo.third.q3': 'If a skin infection developed near my due date, how would that affect delivery room protocols or intravenous access?',
  'tattoo.third.source': 'NHS Clinical Guidance on Delivery Preparation; General clinical reasoning.',

  'tattoo.breastfeeding.summary': 'Tattoo pigments are deposited intradermally and engulfed by macrophages; transmission of large intact pigment particles into breast milk has not been demonstrated in clinical literature. Maternal infection control remains the primary clinical focus.',
  'tattoo.breastfeeding.c1': 'Intact pigment granules are too large to pass into human milk, though pharmacokinetic data on fragmented metabolites remains limited.',
  'tattoo.breastfeeding.c2': 'A bacterial skin infection contracted while nursing requires antibiotic therapy that must be evaluated for infant safety during lactation.',
  'tattoo.breastfeeding.c3': 'Postpartum physical fatigue and sleep disruption can compromise immune resources and delay dermal wound closure.',
  'tattoo.breastfeeding.c4': 'Professional artists commonly recommend waiting until nursing routines and postpartum healing are well established.',
  'tattoo.breastfeeding.q1': 'If I were to develop a localized skin infection while nursing, which antibiotics are safe to take without interrupting breastfeeding?',
  'tattoo.breastfeeding.q2': 'Are there specific timing recommendations regarding postpartum recovery before undergoing elective skin-breaking procedures?',
  'tattoo.breastfeeding.q3': 'Does my infant have any health vulnerabilities (such as jaundice or prematurity) that warrant extra caution regarding maternal skin infections?',
  'tattoo.breastfeeding.source': 'NHS Breastfeeding and Body Art; General clinical reasoning.',

  // ==========================================
  // PIERCING (NON-EAR)
  // ==========================================
  'piercing.trying.summary': 'New body piercings during pre-conception require months of dedicated healing. Fistula formation requires steady immune resources, and planning ahead for pregnancy-related anatomical changes is advisable.',
  'piercing.trying.c1': 'Body piercings in high-motion areas (navel, nipples) take 6 to 12 months to form a mature, resilient epithelial fistula.',
  'piercing.trying.c2': 'If conception occurs during early healing, subsequent hormonal and vascular adaptations can prolong the healing timeline.',
  'piercing.trying.c3': 'Implant-grade, biocompatible materials prevent localized contact dermatitis and reduce tissue reactivity.',
  'piercing.trying.q1': 'If a new piercing is actively healing when I become pregnant, will early pregnancy hormones affect tissue healing?',
  'piercing.trying.q2': 'Are there specific cleaning solutions or topical aftercare products to avoid if pregnancy is suspected?',
  'piercing.trying.source': 'General clinical reasoning: no standalone guideline on pre-conception piercing published by ACOG or RCOG.',

  'piercing.first.summary': 'Establishing a new puncture tract and foreign body during the first trimester places demands on an adapting maternal immune system during the critical organogenesis period.',
  'piercing.first.c1': 'Fistula formation is an active inflammatory process requiring sustained immune resources during early embryonic development.',
  'piercing.first.c2': 'First-trimester morning sickness, fatigue, and hormonal shifts can compromise daily sterile aftercare compliance.',
  'piercing.first.c3': 'Systemic bacteremia from a contaminated piercing site carries heightened concern during weeks 1–12 of pregnancy.',
  'piercing.first.c4': 'Professional piercing studios standardly decline new piercings on pregnant clients as a risk-management protocol; discuss timing with your provider.',
  'piercing.first.q1': 'What are the clinical concerns regarding the maternal body healing a new foreign object during weeks 1–12?',
  'piercing.first.q2': 'If an infection were to develop at a piercing site, how quickly should I seek medical evaluation?',
  'piercing.first.q3': 'What clinical signs distinguish normal piercing inflammation from an infection requiring prescription antibiotics?',
  'piercing.first.source': 'ACOG Clinical Consensus; NHS Pregnancy and Skin Considerations.',

  'piercing.second.summary': 'Second-trimester body piercings must account for rapid anatomical changes. Specifically, navel and abdominal piercings commonly migrate as the abdomen expands; discuss timing with your provider.',
  'piercing.second.c1': 'Abdominal wall distension exerts outward tension on navel piercings, commonly causing migration, thinning, or rejection of the tissue channel.',
  'piercing.second.c2': 'Cutaneous vasodilation increases localized bleeding and tissue reactivity at puncture sites.',
  'piercing.second.c3': 'Existing mature piercings may often be retained if comfortable, utilizing flexible non-metallic retainers where appropriate.',
  'piercing.second.c4': 'For general migration mechanics unrelated to pregnancy, studios refer clients to specialized piercing migration assessments.',
  'piercing.second.q1': 'How will abdominal expansion impact my existing navel piercing channel over the coming months?',
  'piercing.second.q2': 'Will I need to remove or replace body jewelry for scheduled obstetrical ultrasound examinations?',
  'piercing.second.q3': 'What symptoms indicate that a piercing is experiencing excessive physical tension from expanding tissue?',
  'piercing.second.source': 'NHS Guidance on Body Piercing in Pregnancy; General clinical reasoning.',

  'piercing.third.summary': 'New body piercings in the third trimester are not recommended by obstetric teams due to imminent delivery and hospital protocols regarding foreign bodies.',
  'piercing.third.c1': 'Hospital labor and delivery units routinely require removal of metallic jewelry before surgery, emergency caesareans, or electrosurgery to prevent burn injuries.',
  'piercing.third.c2': 'An immature, unhealed piercing tract close to delivery introduces an unnecessary potential infection vector.',
  'piercing.third.c3': 'Late-pregnancy fluid retention and rapid postural changes cause discomfort and pressure on new body piercings.',
  'piercing.third.q1': 'What is your hospital delivery unit’s specific policy on jewelry during labor, delivery, or an unexpected caesarean section?',
  'piercing.third.q2': 'If I have an existing mature piercing I wish to keep open during birth, are flexible non-metallic retainers permitted?',
  'piercing.third.source': 'NHS & RCOG Clinical Protocols for Labor, Delivery, and Operating Theatres.',

  'piercing.breastfeeding.summary': 'Nipple piercings during lactation carry direct clinical implications for milk duct patency, infant latching, and mastitis risk. Other body piercings carry standard wound-healing considerations.',
  'piercing.breastfeeding.c1': 'New or healing nipple piercings create open tissue tracts adjacent to lactiferous ducts, elevating the risk of ductal infection, mastitis, and localized abscess.',
  'piercing.breastfeeding.c2': 'Retaining jewelry in nipples during feeding presents an aspiration and choking hazard for the infant and impairs normal latch mechanics.',
  'piercing.breastfeeding.c3': 'For non-nipple piercings, maternal systemic health and avoidance of infections requiring medications compatible with nursing are key factors.',
  'piercing.breastfeeding.q1': 'What are the specific clinical risks of mastitis or duct blockage if I have existing or new nipple piercings while nursing?',
  'piercing.breastfeeding.q2': 'If I get a non-nipple body piercing, what antiseptic cleansers and antibiotic options are safe during lactation?',
  'piercing.breastfeeding.source': 'WHO Infant Feeding and Maternal Health Guidelines; NHS Breastfeeding Guidance.',

  // ==========================================
  // EARLOBE
  // ==========================================
  'earlobe.trying.summary': 'Earlobe piercings involve minimal vascularity and a small wound surface area. Standard sterile technique, autoclave sterilization, and biocompatible starter jewelry are the primary considerations.',
  'earlobe.trying.c1': 'Earlobe tissue heals relatively rapidly (typically 6–8 weeks) compared to cartilage or body piercings.',
  'earlobe.trying.c2': 'Maintaining sterile saline aftercare prevents localized superficial bacterial colonization.',
  'earlobe.trying.c3': 'Biocompatible materials minimize nickel sensitization and allergic contact dermatitis.',
  'earlobe.trying.q1': 'Are there any general health precautions I should keep in mind for minor skin procedures while planning a pregnancy?',
  'earlobe.trying.q2': 'Is standard sterile saline solution the recommended aftercare for minor earlobe piercings?',
  'earlobe.trying.source': 'General clinical reasoning: minor procedural risk profile.',

  'earlobe.first.summary': 'While earlobe piercings carry very low systemic risk, any elective skin-breaking procedure during the first trimester warrants consideration regarding infection prevention and aftercare compliance.',
  'earlobe.first.c1': 'Earlobe tissue rarely causes systemic complications, but avoiding unnecessary bacterial exposure during organogenesis is standard clinical prudence.',
  'earlobe.first.c2': 'First-trimester fatigue or morning sickness can lead to skipped daily saline cleanses.',
  'earlobe.first.c3': 'Choose a professional studio utilizing single-use sterile needles and autoclaved tools rather than mechanical piercing guns.',
  'earlobe.first.q1': 'Is a minor earlobe piercing acceptable during my first trimester, provided strict sterile protocol is followed?',
  'earlobe.first.q2': 'What should I do if the earlobe becomes warm, red, or tender?',
  'earlobe.first.source': 'General clinical reasoning: low-risk profile with first-trimester prudence.',

  'earlobe.second.summary': 'Earlobe piercing during the second trimester presents low clinical risk when conducted in a clean studio with sterile implements and high-grade biocompatible materials.',
  'earlobe.second.c1': 'The second trimester is typically the period of greatest physical comfort and immune stability during pregnancy.',
  'earlobe.second.c2': 'Daily saline aftercare twice daily is standard practice to prevent superficial bacterial colonization.',
  'earlobe.second.c3': 'Biocompatible materials prevent localized allergic reactions.',
  'earlobe.second.q1': 'Do you have any clinical objections to me getting an earlobe piercing during this stage of pregnancy?',
  'earlobe.second.q2': 'Are there specific materials you recommend I choose to prevent allergic contact dermatitis?',
  'earlobe.second.source': 'General clinical reasoning: established clinical practice for minor localized procedures.',

  'earlobe.third.summary': 'Earlobe piercings in the third trimester carry low systemic risk, but hospital delivery guidelines on wearing jewelry during childbirth should be checked in advance.',
  'earlobe.third.c1': 'If delivery occurs before the 6–8 week healing window completes, hospital policies may require jewelry removal, risking closure of the fresh hole.',
  'earlobe.third.c2': 'Electrosurgery safety protocols during caesarean delivery require removal of metallic conductive objects.',
  'earlobe.third.q1': 'Will I be asked to remove newly pierced earlobe studs during labor, delivery, or in the operating theatre?',
  'earlobe.third.q2': 'If a caesarean section becomes necessary, are non-metallic studs permitted, or must all jewelry be removed?',
  'earlobe.third.source': 'NHS Hospital Inpatient & Delivery Suite Jewelry Policies.',

  'earlobe.breastfeeding.summary': 'Earlobe piercing during breastfeeding carries negligible systemic or lactation-related risk. Standard hygiene and safe handling around infants are the primary considerations.',
  'earlobe.breastfeeding.c1': 'Earlobe healing does not affect milk supply, breast anatomy, or lactation safety.',
  'earlobe.breastfeeding.c2': 'As the infant grows, grasping and pulling on ear jewelry becomes a practical physical hazard; low-profile studs are advisable.',
  'earlobe.breastfeeding.c3': 'Use standard sterile saline care twice daily until the tract matures.',
  'earlobe.breastfeeding.q1': 'Are there any concerns regarding earlobe piercings and nursing?',
  'earlobe.breastfeeding.q2': 'What infant-safe aftercare practices do you recommend?',
  'earlobe.breastfeeding.source': 'General clinical reasoning: low systemic risk profile.',

  // ==========================================
  // PMU (PERMANENT MAKEUP / MICROBLADING)
  // ==========================================
  'pmu.trying.summary': 'Permanent makeup combines intradermal pigment implantation with topical anaesthetics (such as lidocaine). Timing around pre-conception should be discussed.',
  'pmu.trying.c1': 'Topical anaesthetics absorb across broken cutaneous barriers into maternal systemic circulation.',
  'pmu.trying.c2': 'Chemical pigments meeting Commission Regulation (EU) 2020/2081 restrict hazardous compounds, but fetal pharmacokinetic studies on microblading pigments are lacking.',
  'pmu.trying.c3': 'Planning touch-up appointments (typically 6–8 weeks post-initial) should factor in potential pregnancy timing.',
  'pmu.trying.q1': 'How long before actively trying to conceive should I complete cosmetic tattoo procedures involving topical lidocaine?',
  'pmu.trying.q2': 'Are there risks associated with the required follow-up touch-up sessions if I become pregnant between appointments?',
  'pmu.trying.source': 'ACOG Guidelines on Dermatological and Cosmetic Procedures; EU Regulation 2020/2081.',

  'pmu.first.summary': 'Permanent makeup during the first trimester involves both dermal pigment exposure and topical anaesthetics during the vulnerable period of organogenesis.',
  'pmu.first.c1': 'Topical anaesthetics (such as lidocaine, prilocaine, tetracaine) are absorbed systemically; their use in elective cosmetic procedures during organogenesis is avoided in standard practice.',
  'pmu.first.c2': 'Hormonal fluctuations during early pregnancy can cause unpredictable skin oiliness, altered pigment uptake, and patchy healing.',
  'pmu.first.c3': 'Professional PMU artists standardly decline services to clients in the first trimester; discuss timing with your provider.',
  'pmu.first.q1': 'What are your clinical recommendations regarding topical numbing agents (lidocaine/EMLA) during the first trimester?',
  'pmu.first.q2': 'How do early pregnancy hormones affect skin healing and the risk of post-procedure hyperpigmentation?',
  'pmu.first.source': 'ACOG Committee Opinion on Elective Cosmetic Procedures; RCOG Clinical Guidance.',

  'pmu.second.summary': 'In the second trimester, topical anaesthetic absorption and altered skin pigmentation (such as melasma / "mask of pregnancy") are primary consultation topics.',
  'pmu.second.c1': 'Pregnancy hormones stimulate melanocytes; microblading or lip tattooing during this time may heal with unpredictable, uneven coloration or post-inflammatory hyperpigmentation.',
  'pmu.second.c2': 'Topical anaesthetic formulations still require clinical clearance from your obstetric care provider.',
  'pmu.second.c3': 'Increased facial vascularity can lead to increased pinpoint bleeding during microblading, which can expel pigment from incisions.',
  'pmu.second.q1': 'Could pregnancy-related hyperpigmentation (melasma) cause unpredictable or blotchy cosmetic tattoo healing?',
  'pmu.second.q2': 'Does your clinic approve topical lidocaine for elective facial cosmetic procedures in the second trimester?',
  'pmu.second.source': 'General clinical reasoning; British Association of Dermatologists guidelines on cosmetic procedures in pregnancy.',

  'pmu.third.summary': 'Third-trimester PMU procedures are generally deferred by clinical teams due to anaesthetic protocols, facial edema, and procedural positioning.',
  'pmu.third.c1': 'Facial fluid retention and swelling can distort natural brow, eyelid, or lip symmetry, resulting in uneven cosmetic placement after postpartum swelling resolves.',
  'pmu.third.c2': 'Reclining in a treatment chair for 2+ hours can cause vena cava compression and postural dizziness.',
  'pmu.third.c3': 'Avoiding elective open wounds or infection vectors near labor and delivery is standard obstetric advice.',
  'pmu.third.q1': 'How will facial swelling or fluid changes near my delivery date impact the precision of cosmetic tattooing?',
  'pmu.third.q2': 'If an unexpected allergic or inflammatory reaction occurs near delivery, what treatments are safe to use?',
  'pmu.third.source': 'General clinical reasoning: late-gestation elective procedure deferral.',

  'pmu.breastfeeding.summary': 'PMU during lactation centers on topical anaesthetic transfer into breast milk and maternal infection control.',
  'pmu.breastfeeding.c1': 'Lidocaine applied topically has low systemic absorption, but trace amounts can be excreted into breast milk; discussing timing of feeds or expression with your midwife is recommended.',
  'pmu.breastfeeding.c2': 'Pigment particles remain primarily in the dermis and local lymph nodes, with no evidence of milk transfer.',
  'pmu.breastfeeding.c3': 'Sleep deprivation and hormonal recovery can slow the superficial re-epithelialization of microbladed brows.',
  'pmu.breastfeeding.q1': 'How long after topical lidocaine application for a brow or lip procedure should I wait before nursing?',
  'pmu.breastfeeding.q2': 'Are there specific antiseptic cleansers or ointments that are safe to use around my baby while my brows heal?',
  'pmu.breastfeeding.source': 'NHS Guidance on Topical Anaesthetics and Breastfeeding; General clinical reasoning.',

  // ==========================================
  // TATTOO LASER REMOVAL
  // ==========================================
  'removal.trying.summary': 'Laser tattoo removal shatters ink pigments into microscopic fragments that are cleared systemically by macrophages, lymphatics, and kidneys. Discuss treatment timing around conception.',
  'removal.trying.c1': 'The fragmentation process produces a systemic pulse of pigment breakdown products and inflammatory mediators over several weeks post-treatment.',
  'removal.trying.c2': 'The pharmacological fate and transplacental potential of ink breakdown nanoparticles during early conception is largely unstudied in clinical trials.',
  'removal.trying.c3': 'Clinics commonly suggest completing laser cycles or taking a planned hiatus before attempting conception.',
  'removal.trying.q1': 'How long after a laser removal session does the body take to clear fragmented pigment breakdown products?',
  'removal.trying.q2': 'Would you advise pausing laser treatments while actively trying to conceive?',
  'removal.trying.source': 'British Association of Dermatologists Laser Guidance; General clinical reasoning.',

  'removal.first.summary': 'Laser tattoo removal during the first trimester introduces circulating pigment nanoparticles and significant localized thermal/inflammatory stress during organogenesis.',
  'removal.first.c1': 'Laser photothermolysis breaks chemical pigments into sub-micron fragments that enter systemic and lymphatic circulation.',
  'removal.first.c2': 'Fetal safety of circulating pigment nanoparticles during weeks 1–12 (organogenesis) has not been demonstrated in clinical research.',
  'removal.first.c3': 'High-dose topical anaesthetics or injectable lidocaine commonly used in laser sessions pose unnecessary systemic pharmaceutical exposure.',
  'removal.first.c4': 'Laser clinics and dermatologists standardly postpone elective tattoo removal until after pregnancy; discuss timing with your provider.',
  'removal.first.q1': 'What are the clinical reasons dermatologists defer laser tattoo removal during the first trimester?',
  'removal.first.q2': 'If I had a laser session before realizing I was pregnant, what should we monitor at my next antenatal visit?',
  'removal.first.source': 'ACOG Guidelines on Laser and Aesthetic Devices in Pregnancy; Clinical pharmacological consensus.',

  'removal.second.summary': 'Laser removal in the second trimester remains a high-priority topic to discuss with your provider, as systemic nanoparticle clearance and skin hyperpigmentation risks continue.',
  'removal.second.c1': 'Increased melanin activity during pregnancy significantly increases the risk of post-inflammatory hyperpigmentation (PIH) or permanent hypopigmentation at laser sites.',
  'removal.second.c2': 'The systemic clearance burden of fragmented pigments remains active for 6–8 weeks following each laser pass.',
  'removal.second.c3': 'Deferring further sessions until postpartum is the standard recommendation of laser safety officers and obstetricians.',
  'removal.second.q1': 'Does my increased skin pigmentation during pregnancy increase the risk of scarring or skin discoloration from laser removal?',
  'removal.second.q2': 'Is it safe to leave my tattoo partially removed until after delivery?',
  'removal.second.source': 'British Association of Dermatologists; General clinical reasoning.',

  'removal.third.summary': 'Tattoo laser removal in late pregnancy adds unnecessary physiological stress, inflammation, and potential wound complications close to delivery.',
  'removal.third.c1': 'Blistering, superficial burns, and infection risks associated with aggressive laser sessions create unnecessary maternal discomfort near term.',
  'removal.third.c2': 'Systemic inflammatory responses can elevate maternal body temperature and pulse.',
  'removal.third.c3': 'Treatment positioning and mobility are compromised in the third trimester.',
  'removal.third.q1': 'What risks would a laser burn or blistering complication introduce if I go into labor unexpectedly?',
  'removal.third.q2': 'When postpartum is it typically considered appropriate to resume laser treatments?',
  'removal.third.source': 'General clinical reasoning: elective laser intervention deferral in late gestation.',

  'removal.breastfeeding.summary': 'During lactation, fragmented ink nanoparticles cleared by macrophages enter the lymphatic system. Whether trace pigment chemicals or metabolites transfer into breast milk has not been established.',
  'removal.breastfeeding.c1': 'Research on whether ink particles released by laser removal pass into breast milk is very limited, which is why a precautionary approach is commonly advised.',
  'removal.breastfeeding.c2': 'Laser treatments frequently require high-potency topical numbing creams that require careful monitoring around nursing.',
  'removal.breastfeeding.c3': 'Postponing elective laser treatments until weaning eliminates any question of chemical exposure for the nursing infant.',
  'removal.breastfeeding.q1': 'Could fragmented ink particles from laser removal pass into my breast milk?',
  'removal.breastfeeding.q2': 'Would you recommend waiting until my baby is weaned before restarting my laser tattoo removal sessions?',
  'removal.breastfeeding.source': 'RCOG & NHS Clinical Guidance on Medications and Procedures During Lactation; General clinical reasoning.'
,

  // Additional Improvements (Features 1-7)
  'nav.mode_reference': 'Single Procedure Reference',
  'nav.mode_compare': 'Procedure Comparison Matrix',
  'nav.mode_hospital': 'Hospital Policy Planner',
  'nav.mode_navel': 'Navel Tissue Expansion Guide',
  'nav.mode_nipple': 'Nipple & Lactation Timeline',
  'nav.mode_postpartum': 'Postpartum Resumption Timeline',
  'nav.mode_triage': 'Complication Triage Reference',
  'worksheet.custom_notes_title': 'Your Personal Notes & Discussion Points',
  'worksheet.custom_notes_desc': 'Add your personal questions, existing piercing history, or specific topics you want to discuss with your healthcare provider before printing:',
  'worksheet.custom_notes_placeholder': 'Type your questions or notes here (e.g., "Ask about my 3-year-old navel piercing during labor", "Mention scheduled c-section on week 39")...',
  'worksheet.print_client_notes_title': 'Client Notes & Specific Questions to Discuss:',
  'compare.title': 'Side-by-Side Procedure Comparison Matrix',
  'compare.subtitle': 'Select two or three procedure and stage combinations to evaluate their conversation priority tiers, physiological rationales, and discussion points side by side.',
  'compare.col_heading': 'Scenario {num}',
  'compare.select_proc': 'Select procedure',
  'compare.select_stage': 'Select stage',
  'compare.clear_btn': 'Reset Matrix',
  'compare.prompt': 'Select a procedure and stage for at least two columns above to compare clinical considerations side by side.',
  'compare.priority_label': 'Conversation Priority',
  'compare.rationale_label': 'Clinical Rationale',
  'compare.considerations_label': 'Key Physiological Factors',
  'compare.source_label': 'Evidence Basis',
  'hospital.title': 'Hospital & Birthing Unit Jewellery Policy Planner',
  'hospital.subtitle': 'Structured checklist to review at your 36-week antenatal appointment regarding electrocautery, emergency delivery, and neonatal contact protocols.',
  'hospital.intro': 'Hospital policies on body jewelry during labor and delivery vary by birthing unit, surgical protocols, and regional healthcare trusts. Review these points with your midwife or obstetrician before your 36-week visit.',
  'hospital.item1_title': 'Electrocautery & Monopolar Diathermy Equipment',
  'hospital.item1_desc': 'In the event of an unplanned or emergency surgical delivery (cesarean), monopolar electrocautery devices create an electrical circuit through the body. Conductive metallic body jewelry can present a localized thermal burn risk if situated between the surgical site and the grounding dispersive pad.',
  'hospital.item2_title': 'Emergency Airway & Anesthesia Management',
  'hospital.item2_desc': 'Oral, lip, tongue, and nasal jewelry present potential airway obstruction or dislodgement risks during emergency intubation or bag-valve-mask ventilation if general anesthesia becomes necessary.',
  'hospital.item3_title': 'Pelvic, Genital & Perineal Jewellery',
  'hospital.item3_desc': 'Genital and perineal piercings pose direct tearing and laceration hazards during vaginal delivery and tissue distension, and interfere with episiotomy or perineal repair. Birthing units standardly require complete removal prior to active labor.',
  'hospital.item4_title': 'Neonatal Skin Contact & Handling',
  'hospital.item4_desc': 'Facial, neck, wrist, and torso jewelry can cause accidental mechanical abrasions to delicate neonatal skin during immediate skin-to-skin contact, delivery room handling, and initial infant nursing.',
  'hospital.item5_title': 'Diagnostic Magnetic Resonance Imaging (MRI)',
  'hospital.item5_desc': 'Should urgent postpartum imaging be indicated, ferromagnetic metallic jewelry presents magnetic projectile, torque, and severe radiofrequency-induced heating risks.',
  'hospital.action_title': '36-Week Midwife Discussion Action Points',
  'hospital.action1': 'Ask your midwife about the specific theater and labor ward jewelry policy for your designated birthing facility.',
  'hospital.action2': 'Request documentation in your maternity hand-held notes if non-metallic inert retainers are permitted in non-operative sites.',
  'hospital.action3': 'Plan the removal of all oral, facial, genital, and abdominal jewelry well before your estimated due date, or arrange professional studio assistance for stubborn closures.',
  'hospital.product_note_title': 'Product Note: Non-Metallic Inert Retainers',
  'hospital.product_note_body': 'Non-conductive, non-metallic retainers made from a PP-R random copolymer or other implant-grade non-conductive polymers do not conduct electrical current and are not ferromagnetic. They are often used to keep an established piercing channel open where hospital policy permits non-metallic retainers. Operating theatre and anaesthesia protocols remain under the authority of the attending surgical and clinical team, who have the final say on any foreign body in theatre.',
  'navel.title': 'Anatomical Navel Tissue-Expansion Visual Guide',
  'navel.subtitle': 'Educational mechanical stress models demonstrating outward abdominal wall expansion, directional shearing forces, and tract distortion across pregnancy trimesters.',
  'navel.intro': 'As the gravid uterus expands the anterior abdominal wall, the umbilical tissue tract experiences substantial directional stress. This visual guide illustrates how anatomical tension shifts over each trimester.',
  'navel.t1_title': 'Pre-Conception / First Trimester: Resting Geometry',
  'navel.t1_desc': 'Tissue depth is standard with minimal tension. The piercing tract sits vertically in relaxed subdermal adipose tissue without abdominal wall distortion.',
  'navel.t2_title': 'Second Trimester: Lateral & Longitudinal Expansion',
  'navel.t2_desc': 'The expanding uterus flattens the umbilical depression. Skin undergoes progressive lateral and longitudinal tension, exerting shearing forces against rigid bar ends.',
  'navel.t3_title': 'Third Trimester: Severe Mechanical Shearing & Eversion',
  'navel.t3_desc': 'Maximal distension can cause umbilical eversion (popping out). Outward dermal pressure causes tissue thinning over rigid jewelry, substantially elevating migration, tearing, or permanent hypertrophic scarring.',
  'navel.stress_points_title': 'Key Mechanical Stress Points to Discuss With Your Provider',
  'navel.stress_p1': 'Skin thinning over the entry/exit holes indicates excessive mechanical tension requiring immediate jewelry removal to prevent irreversible tract tearing.',
  'navel.stress_p2': 'Rigid metallic curved barbells cannot flex to follow changing abdominal wall curvature, leading to localized pressure necrosis at ball contact points.',
  'navel.stress_p3': 'Umbilical flattening eliminates the protective recess, causing clothing waistbands and maternity belts to catch and exert direct shearing force.',
  'navel.sizing_link_prefix': 'For technical jewelry dimension measurements, gauge conversions, and barbell lengths, refer to the',
  'navel.sizing_link_text': 'Jewelry Size Visualizer',
  'navel.sizing_link_suffix': '. Do not attempt self-directed gauge stretching or unguided resizing during pregnancy; discuss any jewelry changes with your professional piercer and midwife.',
  'navel.product_note_title': 'Product Note: Flexible Umbilical Retainers',
  'navel.product_note_body': 'Patrick Poli, creator of BioFlex® body jewelry, selected a flexible PP-R random copolymer for it so that it bends and yields along shifting anatomical contours without creating rigid pressure points. PP-R is injection-moulded as one monolithic piece; it is not PTFE (which must be machined from extruded rod and tends to lose orientation). If outward skin tension creates redness, pain, or thinning at the navel piercing site, remove the jewelry immediately regardless of material type.',
  'nipple.title': 'Nipple Piercings & Lactation Timeline',
  'nipple.subtitle': 'Guidance on lactation mechanics, removing jewelry before every feed, infant airway safety, and when to see a lactation professional.',
  'nipple.intro': 'Nipple piercings require thoughtful preparation during pregnancy and lactation to safeguard infant feeding and prevent severe physical complications.',
  'nipple.choking_title': 'Crucial Infant Airway Safety: Remove Jewelry Prior to Every Feed or Expression',
  'nipple.choking_desc': 'Any jewelry item, ball, gem, or retainer left in a nipple piercing poses an immediate and life-threatening choking, aspiration, and airway obstruction hazard for an infant during feeding or breast pumping. All jewelry must be completely removed prior to latching, nursing, or using a mechanical breast pump.',
  'nipple.mech_title': 'Lactation Mechanics & Milk Flow Dynamics',
  'nipple.mech_desc': 'Human nipples contain between 4 and 18 individual lactiferous duct openings. Mature piercing tracts typically pass through or between several ducts. Milk may express freely from both the natural duct orifices and the piercing entry and exit pores during letdown.',
  'nipple.latch_title': 'Infant Latch Quality & Palatal Seal',
  'nipple.latch_desc': 'Localized scar tissue from previous piercings can affect nipple elasticity and dynamic projection when the infant attempts to draw the breast deep into the soft palate, potentially causing maternal discomfort or shallow latch.',
  'nipple.consult_title': 'Lactation Consultant & Midwife Support',
  'nipple.consult_desc': 'Never attempt self-diagnosis of duct patency or scar tissue density. If you experience localized milk stasis, pain, or difficulty establishing an effective latch, arrange an in-person assessment with an International Board Certified Lactation Consultant (IBCLC) or midwife.',
  'nipple.infection_title': 'Mastitis & Re-Insertion Hazards',
  'nipple.infection_desc': 'Repeatedly inserting and removing jewelry into an unhealed or irritated piercing channel between nursing sessions introduces maternal skin flora directly into lactiferous sinuses, significantly increasing the risk of infective mastitis.',
  'postpartum.title': 'Postpartum Resumption Educational Timeline',
  'postpartum.subtitle': 'Educational milestones covering physiological wound healing, immune recovery, hemodynamic normalization, and hormonal stabilization before resuming body art.',
  'postpartum.intro': 'Resuming elective body art after childbirth depends on complex maternal physiological milestones rather than a rigid calendar date. Review these recovery phases with your doctor or midwife at your postpartum check.',
  'postpartum.p1_title': 'Weeks 0–6: Acute Puerperium & Hemodynamic Recovery',
  'postpartum.p1_desc': 'Uterine involution, lochia shedding, placental wound site endothelialization, and massive blood volume shifts take precedence. The maternal immune system is recovering from gestational modulation, and elective dermal trauma is not clinically advised.',
  'postpartum.p2_title': 'Weeks 6–12: Primary Postpartum Review & Healing Consolidation',
  'postpartum.p2_desc': 'Following clearance at the 6-week postpartum check, acute perineal or surgical cesarean wounds have consolidated. However, maternal fatigue, sleep disruption, and initial lactation establishment continue to modulate systemic immune responses.',
  'postpartum.p3_title': 'Months 3–6: Hormonal Normalization & Tissue Remodeling',
  'postpartum.p3_desc': 'Connective tissue laxity driven by gestational relaxin gradually diminishes. For non-nursing individuals, skin barrier integrity, vascular responsiveness, and immune baseline parameters largely stabilize.',
  'postpartum.p4_title': 'Lactation Duration Through Weaning: Sustained Considerations',
  'postpartum.p4_desc': 'Throughout active breastfeeding, elevated prolactin suppresses normal menstrual ovulatory cycling and maintains altered tissue hydration. Laser removal and elective cosmetic pigments continue to present infant safety and pigment stability considerations.',
  'postpartum.closing_title': 'Clinical Timing Advisory',
  'postpartum.closing_desc': 'Individual healing velocity varies substantially based on surgical delivery status, blood loss, nutritional reserves, and infant feeding routines. Always discuss procedure timing directly with your obstetrician, GP, or midwife prior to booking.',
  'triage.title': 'Complication Triage Reference for Existing Piercings & Tattoos',
  'triage.subtitle': 'Clinical distinction between mechanical irritation from stretching tissue and symptoms requiring immediate medical evaluation by a doctor or midwife.',
  'triage.intro': 'This reference assists in distinguishing non-urgent physical tension from serious systemic or localized clinical infections. This tool does not provide medical diagnoses or clearances; all symptoms require professional clinical oversight.',
  'triage.cat_mechanical': 'Mechanical Irritation (Localized Physical Tension)',
  'triage.cat_medical': 'Symptoms Requiring Urgent Healthcare Provider Review',
  'triage.mech_sym1': 'Mild erythema (redness) strictly confined to the immediate entry/exit aperture without spreading warmth.',
  'triage.mech_sym2': 'Absence of systemic fever, chills, rigors, or generalized malaise.',
  'triage.mech_sym3': 'Clear or pale straw-colored serous lymphatic fluid discharge that dries into crusts, with no foul odor.',
  'triage.mech_sym4': 'Discomfort that resolves promptly when clothing pressure, elastic waistbands, or rigid jewelry is relieved.',
  'triage.mech_action': 'Action: Relieve clothing tension, avoid touching with unwashed hands, and consult your professional piercer regarding anatomical sizing. If symptoms persist or worsen, contact your midwife or doctor.',
  'triage.med_sym1': 'Expanding, hot, throbbing erythema spreading outward beyond the piercing or tattoo margins.',
  'triage.med_sym2': 'Systemic symptoms including oral fever (>38°C / 100.4°F), rigors, tachycardia, or maternal malaise.',
  'triage.med_sym3': 'Thick, opaque yellow or green purulent discharge with a distinctive foul odor.',
  'triage.med_sym4': 'Red tracking lines (lymphangitis) migrating away from the procedure site toward regional lymph node basins.',
  'triage.med_sym5': 'Rapidly thinning skin tissue presenting an imminent risk of complete tract tear or extrusion.',
  'triage.med_action': 'Action: Seek immediate clinical evaluation from your obstetrician, GP, midwife, or acute emergency clinic. Do not wait for an elective studio consultation.'
};

const I18N_FR = {
  // Search Bar & Filter Strings
  'search.placeholder': 'Rechercher des directives cliniques, thèmes ou matériaux (ex. piercing, nombril, mastite)...',
  'search.clear_btn': 'Effacer la recherche',
  'search.filter_all': 'Tous les thèmes',
  'search.filter_procedures': 'Actes corporels',
  'search.filter_guidelines': 'Directives spécialisées',
  'search.results_count': '{count} thème(s) clinique(s) trouvé(s) pour « {query} »',
  'search.no_results_title': 'Aucun thème clinique correspondant',
  'search.no_results_desc': 'Essayez de rechercher par type d\'acte (tatouage, piercing, microblading), stade (premier trimestre, allaitement) ou motif spécifique (tension ombilicale, voies aériennes, mastite, signes d\'infection).',
  'search.item_category_procedure': 'Référence de sécurité de l\'acte',
  'search.item_category_guideline': 'Directives et thèmes cliniques',
  'search.view_action': 'Consulter le thème',

  // Page Metadata
  'meta.title': 'Référence de sécurité des actes pendant la grossesse et l\'allaitement | Poli International',
  'meta.description': 'Base de réflexion clinique pour échanger avec votre médecin ou sage-femme au sujet des tatouages, piercings et du maquillage permanent pendant la grossesse et l\'allaitement.',

  // Header & Navigation
  'app.badge': 'Référence clinique et studio',
  'app.title': 'Sécurité des actes : grossesse et allaitement',
  'app.subtitle': 'Une base de réflexion clinique pour échanger avec votre médecin ou votre sage-femme au sujet des tatouages, piercings et du maquillage permanent.',
  'app.lang_label': 'Langue :',

  // Language Dropdown Options
  'lang.en': 'Anglais',
  'lang.de': 'Allemand',
  'lang.fr': 'Français',
  'lang.es': 'Espagnol',
  'lang.it': 'Italien',
  'lang.nl': 'Néerlandais',
  'lang.pt': 'Portugais',

  // Form Controls
  'form.procedure_label': 'Type d\'acte',
  'form.stage_label': 'Stade actuel',
  'form.procedure_placeholder': '- Sélectionner un acte -',
  'form.stage_placeholder': '- Sélectionner un stade -',

  // Procedures
  'proc.tattoo': 'Nouveau tatouage',
  'proc.piercing': 'Piercing corporel (hors oreille)',
  'proc.earlobe': 'Piercing du lobe d\'oreille',
  'proc.pmu': 'Maquillage permanent / microblading',
  'proc.removal': 'Détatouage laser',

  // Stages
  'stage.trying': 'Projet de grossesse (période préconceptionnelle)',
  'stage.first': 'Premier trimestre (semaines 1–12)',
  'stage.second': 'Deuxième trimestre (semaines 13–26)',
  'stage.third': 'Troisième trimestre (semaines 27–40)',
  'stage.breastfeeding': 'Allaitement / post-partum',

  // Prompt / Empty State
  'prompt.title': 'Sélectionnez un acte et un stade',
  'prompt.body': 'Sélectionnez un acte de modification corporelle et votre stade de grossesse ou d\'allaitement ci-dessus pour afficher des points de discussion clinique adaptés et une liste de questions à imprimer.',

  // Priority Tier Headings
  'tier1.tag': 'Niveau de priorité 1 : discussion précoce',
  'tier1.title': 'Priorité haute : à aborder impérativement avec votre équipe soignante',
  'tier1.sub': 'Des facteurs physiologiques actifs, de développement embryonnaire ou d\'expansion tissulaire justifient un échange clinique préalable avant toute prise de rendez-vous.',
  'tier2.tag': 'Niveau de priorité 2 : discussion planifiée',
  'tier2.title': 'Discussion planifiée avec votre équipe soignante',
  'tier2.sub': 'Les modifications physiologiques maternelles influent sur la cicatrisation ou le positionnement ; à aborder lors de votre prochaine consultation prénatale.',
  'tier3.tag': 'Niveau de priorité 3 : discussion de routine',
  'tier3.title': 'Discussion de routine avec votre équipe soignante',
  'tier3.sub': 'Complexité procédurale moindre ; mentionnez les protocoles stériles standards et les soins post-actes à votre équipe soignante.',

  // Section Titles
  'section.summary': 'Justification clinique',
  'section.considerations': 'Considérations cliniques et physiologiques',
  'section.checklist': 'Questions pour votre médecin ou sage-femme',
  'section.checklist_intro': 'Cochez les questions que vous souhaitez aborder avec votre sage-femme, obstétricien ou médecin traitant lors de votre prochaine consultation :',
  'section.provenance': 'Origine et sources probantes',
  'section.authority_title': 'Autorité exclusive de votre équipe soignante',
  'section.authority_body': 'Cet outil fournit des éléments de réflexion clinique générale. Votre médecin ou sage-femme dispose de vos antécédents médicaux, de votre bilan sanguin et de l\'évolution de votre grossesse, et demeure le seul décisionnaire clinique pour vos soins.',
  'section.product_note_title': 'Note produit : matériaux pour bijoux de piercing',
  'section.sibling_title': 'Outils cliniques de référence associés',
  'section.print_btn': 'Imprimer la liste de questions',
  'section.meta_reviewed': 'Dernière révision :',
  'section.meta_date': 'Septembre 2026',
  'section.meta_source': 'Fondement de la revue clinique :',

  // Provenance Legal Instruments
  'provenance.eu_instrument_prefix': 'Instrument législatif officiel :',
  'provenance.eu_instrument_name': 'Règlement (UE) 2020/2081 de la Commission (annexe XVII de REACH : encres pour tatouages et maquillage permanent)',

  // Printout Ruled Area & Header
  'print.doc_title': 'Fiche de discussion pour consultation médicale',
  'print.patient_date': 'Date :',
  'print.notes_title': 'Notes de consultation et plan de suivi du praticien',
  'print.patient_copy': 'Exemplaire d\'échange pour la consultation patiente',
  'print.clinician_signature': 'Signature du praticien : _______________________',
  'print.gestational_age': 'Âge gestationnel / Statut : ________________',
  'print.footer_note': 'Ce document synthétise des points d\'information éducative pour votre consultation prénatale ou postnatale. Il ne se substitue pas à l\'évaluation clinique individualisée de votre médecin ou sage-femme.',

  // Product Note Text
  'product_note.body': 'Patrick Poli, créateur des bijoux de corps BioFlex®, a choisi pour eux un copolymère statistique de polypropylène (PP-R) afin que le bijou suive les modifications anatomiques. Les matériaux souples comme les bijoux BioFlex® et les métaux de qualité implant sont des options peu réactives à évaluer avec un perceur professionnel pour les piercings existants ou en cicatrisation pendant la grossesse. Le PP-R est moulé par injection en une seule pièce monolithique ; il ne s\'agit pas de PTFE (qui est usiné à partir de barres extrudées). Échangez avec votre perceur et votre professionnel de santé concernant le choix de vos bijoux.',

  // Disclaimer
  'disclaimer.title': 'Avis clinique important :',
  'disclaimer.body': 'Cet outil constitue un support éducatif et ne remplace jamais un avis médical personnalisé, un diagnostic ou un traitement. Échangez toujours avec votre sage-femme, obstétricien ou médecin traitant avant d\'envisager un acte de modification corporelle.',

  // Sibling Tools
  'sibling.med_title': 'Vérificateur d\'interactions médicamenteuses',
  'sibling.med_desc': 'Vérifiez l\'impact des traitements sur ordonnance et des molécules courantes lors des actes de modification corporelle.',
  'sibling.migration_title': 'Risque de migration et de rejet de piercing',
  'sibling.migration_desc': 'Évaluez la tension mécanique, la profondeur et les contraintes anatomiques influençant la tenue des bijoux.',

  // Tattoo: Trying to Conceive
  'tattoo.trying.summary': 'Les pigments de tatouage pénètrent dans le derme et les ganglions lymphatiques régionaux. Bien qu\'aucun effet tératogène n\'ait été mis en évidence avant la conception, toute infection cutanée locale au moment de l\'implantation embryonnaire nécessite une prise en charge obstétricale ciblée.',
  'tattoo.trying.c1': 'Les données cliniques restent limitées quant à la cinétique des nanoparticules d\'encre dans la circulation systémique pendant la fenêtre de conception.',
  'tattoo.trying.c2': 'Une infection cutanée sévère nécessitant une antibiothérapie lors de l\'implantation requiert un choix pharmaceutique rigoureux compatible avec une grossesse débutante.',
  'tattoo.trying.c3': 'La composition des encres varie ; le règlement (UE) 2020/2081 restreint plus de 4 000 substances chimiques dangereuses, amines aromatiques et métaux lourds.',
  'tattoo.trying.c4': 'Planifier l\'acte en dehors de la période fertile présumée permet de s\'assurer de l\'absence de grossesse avant d\'entamer la phase de cicatrisation.',
  'tattoo.trying.q1': 'Si je conçois peu après m\'être fait tatouer, le processus de cicatrisation dermique peut-il perturber l\'implantation ou le développement embryonnaire initial ?',
  'tattoo.trying.q2': 'Existe-t-il des classes d\'antibiotiques à proscrire formellement en cas de surinfection cutanée pendant les essais de conception ?',
  'tattoo.trying.q3': 'Mon immunité contre l\'hépatite B et ma vaccination antitétanique sont-elles à jour avant d\'effectuer un acte avec effraction cutanée ?',
  'tattoo.trying.source': 'Raisonnement clinique général - absence de directive dédiée sur la phase préconceptionnelle chez l\'ACOG ou le RCOG.',

  // Tattoo: First Trimester
  'tattoo.first.summary': 'Le premier trimestre (semaines 1–12) constitue la fenêtre majeure de l\'organogenèse fœtale. Toute infection maternelle systémique, fièvre prolongée ou réaction inflammatoire aiguë durant cette période présente une gravité clinique accrue.',
  'tattoo.first.c1': 'L\'organogenèse se déroule principalement entre la 3e et la 8e semaine de gestation, période où la stabilité physiologique maternelle est cruciale.',
  'tattoo.first.c2': 'Tout acte avec effraction cutanée expose aux risques d\'inoculation bactérienne (staphylocoques, streptocoques) et d\'agents pathogènes transmissibles par le sang.',
  'tattoo.first.c3': 'Les nausées du premier trimestre, l\'hyperémèse et les adaptations immunitaires peuvent altérer la cicatrisation et le respect des soins d\'hygiène quotidiens.',
  'tattoo.first.c4': 'Les tatoueurs professionnels refusent systématiquement de tatouer les femmes enceintes par principe de gestion des risques ; discutez du calendrier avec votre médecin.',
  'tattoo.first.q1': 'Quels sont les risques cliniques pour l\'organogenèse fœtale si un acte avec effraction cutanée entraîne une surinfection bactérienne ?',
  'tattoo.first.q2': 'Comment les modifications immunitaires du début de grossesse affectent-elles la cicatrisation, et quels signes doivent motiver une consultation urgente ?',
  'tattoo.first.q3': 'Si j\'ai un tatouage en cours de cicatrisation réalisé juste avant de découvrir ma grossesse, quels symptômes particuliers devons-nous surveiller ?',
  'tattoo.first.source': 'Directives de l\'ACOG sur les affections cutanées gravidiques ; recommandations du NHS sur la grossesse et le tatouage.',

  // Tattoo: Second Trimester
  'tattoo.second.summary': 'Au deuxième trimestre (semaines 13–26), la phase principale d\'organogenèse est achevée, mais l\'expansion volémique maternelle, la distension cutanée et les variations liquidiennes influent sur le confort et la cicatrisation.',
  'tattoo.second.c1': 'L\'augmentation du volume sanguin maternel et la vasodilatation périphérique majorent le saignement et les ecchymoses pendant le tatouage.',
  'tattoo.second.c2': 'La distension rapide de la peau sur l\'abdomen, la poitrine, les hanches et le bas du dos déforme durablement les tracés et la géométrie du motif.',
  'tattoo.second.c3': 'Une position assise ou allongée prolongée peut comprimer la veine cave inférieure, réduisant le retour veineux et provoquant des malaises.',
  'tattoo.second.c4': 'Toute infection cutanée survenant au deuxième trimestre nécessite une prise en charge rapide avec des molécules strictement adaptées à la grossesse.',
  'tattoo.second.q1': 'Ma tension artérielle, un éventuel diabète gestationnel ou ma sensibilité cutanée introduisent-ils des risques spécifiques ?',
  'tattoo.second.q2': 'Quelles zones anatomiques doivent être formellement évitées compte tenu de la distension corporelle attendue ces prochains mois ?',
  'tattoo.second.q3': 'Dans quelle mesure l\'augmentation du volume sanguin peut-elle influencer le saignement pendant l\'acte et la durée de cicatrisation ?',
  'tattoo.second.source': 'Recommandations du NHS sur la modification corporelle pendant la grossesse ; raisonnement clinique général.',

  // Tattoo: Third Trimester
  'tattoo.third.summary': 'En fin de grossesse (semaines 27–40), l\'inconfort postural, la rétention d\'eau marquée et la proximité de l\'accouchement font de tout nouvel acte cutané un facteur de complication inutile.',
  'tattoo.third.c1': 'Une plaie cutanée en cours de cicatrisation ou une surinfection non résolue au moment de l\'admission en maternité complique la prise en charge obstétricale.',
  'tattoo.third.c2': 'La position allongée sur le dos lors de séances prolongées déclenche le syndrome de compression cave par le poids de l\'utérus gravide.',
  'tattoo.third.c3': 'Les œdèmes fréquents et la distension des tissus gênent le contrôle précis de la profondeur d\'aiguille et la saturation des pigments.',
  'tattoo.third.c4': 'Le stress de l\'acte et une douleur prolongée peuvent induire une tachycardie maternelle et un épuisement physique à l\'approche du terme.',
  'tattoo.third.q1': 'Quelles complications une plaie de tatouage en cicatrisation pourrait-elle engendrer lors de mon admission pour l\'accouchement ?',
  'tattoo.third.q2': 'Comment la rétention d\'eau du troisième trimestre influence-t-elle la dispersion de l\'encre et la vulnérabilité aux infections ?',
  'tattoo.third.q3': 'Si une infection cutanée se déclarait près du terme, quelles en seraient les conséquences sur les protocoles en salle de naissance ou les accès veineux ?',
  'tattoo.third.source': 'Recommandations cliniques du NHS sur la préparation à l\'accouchement ; raisonnement clinique général.',

  // Tattoo: Breastfeeding
  'tattoo.breastfeeding.summary': 'Les pigments de tatouage sont fixés dans le derme et phagocytés par les macrophages ; le passage de particules intactes dans le lait maternel n\'a pas été démontré. La prévention des infections maternelles demeure la priorité clinique.',
  'tattoo.breastfeeding.c1': 'Les amas pigmentaires sont trop volumineux pour franchir la barrière alvéolaire mammaire, bien que les données sur les métabolites résiduels restent rares.',
  'tattoo.breastfeeding.c2': 'Une surinfection cutanée contractée pendant l\'allaitement impose une antibiothérapie devant être rigoureusement évaluée pour l\'enfant allaité.',
  'tattoo.breastfeeding.c3': 'La fatigue post-partum et le fractionnement du sommeil peuvent affaiblir les défenses immunitaires et ralentir la fermeture de la plaie.',
  'tattoo.breastfeeding.c4': 'Les tatoueurs professionnels préconisent couramment d\'attendre que le rythme d\'allaitement et la récupération post-partum soient bien consolidés.',
  'tattoo.breastfeeding.q1': 'En cas d\'infection cutanée pendant l\'allaitement, quels antibiotiques sont sûrs sans interrompre les tétées ?',
  'tattoo.breastfeeding.q2': 'Quel délai après l\'accouchement recommandez-vous avant d\'envisager un acte de tatouage facultatif ?',
  'tattoo.breastfeeding.q3': 'La santé de mon nourrisson (jaunisse, prématurité) impose-t-elle des précautions particulières vis-à-vis des risques infectieux maternels ?',
  'tattoo.breastfeeding.source': 'Conseils du NHS sur l\'allaitement et le tatouage ; raisonnement clinique général.',

  // Piercing: Trying to Conceive
  'piercing.trying.summary': 'Un nouveau piercing corporel en période préconceptionnelle requiert plusieurs mois de cicatrisation soutenue. La formation du canal mobilise le système immunitaire, et anticiper les futures modifications corporelles est fortement recommandé.',
  'piercing.trying.c1': 'Les piercings situés dans des zones à forte mobilité (nombril, mamelons) demandent 6 à 12 mois pour former un canal épithélial mature et stable.',
  'piercing.trying.c2': 'Si la conception intervient en début de cicatrisation, les bouleversements hormonaux et vasculaires ultérieurs peuvent allonger les délais de guérison.',
  'piercing.trying.c3': 'L\'utilisation de matériaux biocompatibles de grade chirurgical prévient l\'eczéma de contact et limite la réactivité tissulaire.',
  'piercing.trying.q1': 'Si mon nouveau piercing est encore en cicatrisation lorsque je tombe enceinte, les hormones du début de grossesse risquent-elles de perturber les tissus ?',
  'piercing.trying.q2': 'Existe-t-il des solutions de nettoyage ou soins locaux à éviter si une grossesse débute ?',
  'piercing.trying.source': 'Raisonnement clinique général - absence de directive dédiée sur le piercing préconceptionnel chez l\'ACOG ou le RCOG.',

  // Piercing: First Trimester
  'piercing.first.summary': 'Créer un nouveau canal d\'effraction cutanée et introduire un corps étranger au premier trimestre sollicite le système immunitaire maternel durant la période critique de l\'organogenèse.',
  'piercing.first.c1': 'La formation de la fistule épithéliale est un processus inflammatoire actif qui mobilise l\'immunité pendant le développement embryonnaire précoce.',
  'piercing.first.c2': 'Les nausées matinales, l\'asthénie et les fluctuations hormonales du premier trimestre peuvent entraver la régularité des soins d\'hygiène quotidiens.',
  'piercing.first.c3': 'Une bactériémie systémique issue d\'un orifice surinfecté représente un risque majeur durant les semaines 1–12 de la gestation.',
  'piercing.first.c4': 'Les studios de piercing professionnels refusent par principe les nouveaux actes sur femmes enceintes ; discutez du calendrier avec votre médecin.',
  'piercing.first.q1': 'Quelles sont les préoccupations cliniques liées à la cicatrisation d\'un nouveau corps étranger par l\'organisme maternel durant les semaines 1–12 ?',
  'piercing.first.q2': 'En cas de début d\'infection au niveau du piercing, dans quel délai dois-je consulter un professionnel de santé ?',
  'piercing.first.q3': 'Quels signes cliniques permettent de distinguer l\'inflammation normale d\'un piercing d\'une infection nécessitant des antibiotiques sur ordonnance ?',
  'piercing.first.source': 'Consensus clinique de l\'ACOG ; considérations du NHS sur la grossesse et les tissus cutanés.',

  // Piercing: Second Trimester
  'piercing.second.summary': 'Au deuxième trimestre, un piercing corporel doit composer avec des transformations morphologiques rapides. Les piercings au nombril sont particulièrement sujets à la migration sous l\'effet de la distension abdominale.',
  'piercing.second.c1': 'La tension exercée sur la paroi abdominale entraîne fréquemment la migration, l\'amincissement cutané ou le rejet du canal du piercing ombilical.',
  'piercing.second.c2': 'La vasodilatation cutanée accroît le saignement local et la réactivité des tissus au point de ponction.',
  'piercing.second.c3': 'Un piercing ancien et cicatrisé peut souvent être conservé s\'il reste confortable, en utilisant au besoin des tiges souples non métalliques adaptées.',
  'piercing.second.c4': 'Pour les mécanismes de migration généraux sans rapport avec la grossesse, les studios orientent vers des bilans de rejet spécialisés.',
  'piercing.second.q1': 'Comment l\'expansion de mon ventre va-t-elle influencer le canal de mon piercing au nombril au cours des prochains mois ?',
  'piercing.second.q2': 'Devrai-je retirer ou remplacer mes bijoux de corps pour les échographies obstétricales programmées ?',
  'piercing.second.q3': 'Quels symptômes indiquent qu\'un piercing subit une tension mécanique excessive due à l\'étirement de la peau ?',
  'piercing.second.source': 'Recommandations du NHS sur le piercing corporel pendant la grossesse ; raisonnement clinique général.',

  // Piercing: Third Trimester
  'piercing.third.summary': 'La réalisation d\'un nouveau piercing corporel au troisième trimestre est déconseillée par les équipes obstétricales en raison de l\'imminence de l\'accouchement et des règles hospitalières sur les corps étrangers.',
  'piercing.third.c1': 'Les maternités exigent systématiquement le retrait des bijoux métalliques avant une intervention, une césarienne en urgence ou l\'usage du bistouri électrique pour prévenir les brûlures.',
  'piercing.third.c2': 'Un canal de piercing récent et non cicatrisé à l\'approche de la délivrance constitue une porte d\'entrée infectieuse évitable.',
  'piercing.third.c3': 'La rétention liquidienne et les changements posturaux rapides génèrent une pression et un inconfort marqués sur les piercings corporels récents.',
  'piercing.third.q1': 'Quelle est la politique exacte de votre maternité concernant les bijoux lors du travail, de l\'accouchement ou d\'une césarienne imprévue ?',
  'piercing.third.q2': 'Si je souhaite préserver le canal d\'un piercing ancien pendant l\'accouchement, les retainers souples non métalliques sont-ils autorisés ?',
  'piercing.third.source': 'Protocoles cliniques du NHS et du RCOG pour le travail, l\'accouchement et le bloc opératoire.',

  // Piercing: Breastfeeding
  'piercing.breastfeeding.summary': 'Les piercings aux mamelons pendant l\'allaitement ont des répercussions cliniques directes sur la perméabilité des canaux galactophores, la prise du sein et le risque de mastite. Les autres localisations relèvent des précautions classiques de cicatrisation.',
  'piercing.breastfeeding.c1': 'Un piercing au mamelon récent ou en cicatrisation crée un trajet ouvert à proximité des canaux lactifères, augmentant le risque d\'infection canalaire, de mastite et d\'abcès.',
  'piercing.breastfeeding.c2': 'Laisser un bijou sur le mamelon pendant la tétée présente un risque grave d\'étouffement ou d\'inhalation pour le bébé et perturbe la succion.',
  'piercing.breastfeeding.c3': 'Pour les piercings hors mamelon, l\'état général maternel et la compatibilité des traitements antiseptiques ou antibiotiques avec l\'allaitement sont les facteurs déterminants.',
  'piercing.breastfeeding.q1': 'Quels sont les risques médicaux précis de mastite ou d\'obstruction canalaire si j\'ai des piercings aux mamelons pendant l\'allaitement ?',
  'piercing.breastfeeding.q2': 'Si je fais un piercing sur une autre zone corporelle, quels antiseptiques et antibiotiques sont compatibles avec l\'allaitement ?',
  'piercing.breastfeeding.source': 'Directives de l\'OMS sur la nutrition du nourrisson et la santé maternelle ; conseils du NHS sur l\'allaitement.',

  // Earlobe: Trying to Conceive
  'earlobe.trying.summary': 'Le perçage du lobe d\'oreille implique une vascularisation modérée et une surface de plaie très réduite. Une technique stérile rigoureuse, l\'usage d\'outils autoclavés et un bijou de pose biocompatible constituent l\'essentiel des critères.',
  'earlobe.trying.c1': 'Le tissu du lobe cicatrise relativement vite (généralement en 6–8 semaines) par rapport au cartilage ou aux piercings corporels.',
  'earlobe.trying.c2': 'Des soins au sérum physiologique stérile évitent toute colonisation bactérienne superficielle.',
  'earlobe.trying.c3': 'Les matériaux biocompatibles préviennent la sensibilisation au nickel et l\'eczéma de contact allergique.',
  'earlobe.trying.q1': 'Y a-t-il des précautions médicales générales à respecter pour un acte cutané mineur lorsqu\'on planifie une grossesse ?',
  'earlobe.trying.q2': 'Le sérum physiologique stérile est-il le soin recommandé pour la cicatrisation d\'un perçage du lobe ?',
  'earlobe.trying.source': 'Raisonnement clinique général - profil de risque procédural minime.',

  // Earlobe: First Trimester
  'earlobe.first.summary': 'Bien que le perçage du lobe présente un risque systémique très faible, tout geste électif avec effraction cutanée au premier trimestre incite à la vigilance en matière d\'asepsie et de suivi des soins.',
  'earlobe.first.c1': 'Le tissu du lobe n\'entraîne presque jamais de complication générale, mais éviter toute exposition bactérienne inutile pendant l\'organogenèse relève d\'une prudence clinique usuelle.',
  'earlobe.first.c2': 'La fatigue ou les nausées du premier trimestre peuvent conduire à négliger les soins biquotidiens au sérum physiologique.',
  'earlobe.first.c3': 'Privilégiez un studio professionnel utilisant des aiguilles stériles à usage unique et du matériel autoclavé plutôt qu\'un pistolet perce-oreille mécanique.',
  'earlobe.first.q1': 'Un perçage bénin du lobe d\'oreille est-il envisageable au premier trimestre sous réserve d\'un protocole d\'asepsie strict ?',
  'earlobe.first.q2': 'Quelle conduite tenir si le lobe devient chaud, rouge ou douloureux au toucher ?',
  'earlobe.first.source': 'Raisonnement clinique général - profil de faible risque avec prudence au premier trimestre.',

  // Earlobe: Second Trimester
  'earlobe.second.summary': 'Le perçage du lobe au deuxième trimestre présente un risque clinique faible lorsqu\'il est réalisé en studio professionnel avec du matériel stérile et des matériaux biocompatibles de haute pureté.',
  'earlobe.second.c1': 'Le deuxième trimestre correspond habituellement à la période de meilleur confort physique et de stabilité immunitaire de la grossesse.',
  'earlobe.second.c2': 'Deux nettoyages quotidiens au sérum physiologique constituent la référence pour prévenir toute colonisation microbienne superficielle.',
  'earlobe.second.c3': 'Les matériaux biocompatibles empêchent les réactions allergiques locales.',
  'earlobe.second.q1': 'Avez-vous des réserves médicales à ce que je me fasse percer les lobes d\'oreilles à ce stade de ma grossesse ?',
  'earlobe.second.q2': 'Quels métaux me recommandez-vous spécifiquement pour éviter tout risque de réaction allergique ?',
  'earlobe.second.source': 'Raisonnement clinique général - pratique clinique établie pour les gestes locaux mineurs.',

  // Earlobe: Third Trimester
  'earlobe.third.summary': 'Le perçage du lobe au troisième trimestre comporte un risque systémique faible, mais les consignes de la maternité concernant le port de bijoux en salle de naissance doivent être vérifiées au préalable.',
  'earlobe.third.c1': 'Si l\'accouchement a lieu avant la fin du délai de cicatrisation de 6–8 semaines, les protocoles hospitaliers imposant le retrait des bijoux risquent d\'entraîner la fermeture du trou.',
  'earlobe.third.c2': 'Les règles de sécurité électrochirurgicale lors d\'une césarienne exigent l\'ablation de tout objet métallique conducteur.',
  'earlobe.third.q1': 'Devrai-je obligatoirement enlever des boucles d\'oreilles fraîchement posées lors du travail, de l\'accouchement ou au bloc opératoire ?',
  'earlobe.third.q2': 'En cas de césarienne imprévue, des prothèses non métalliques sont-elles tolérées ou tout bijou doit-il être retiré ?',
  'earlobe.third.source': 'Politiques hospitalières du NHS sur les bijoux en maternité et hospitalisation.',

  // Earlobe: Breastfeeding
  'earlobe.breastfeeding.summary': 'Le perçage du lobe pendant l\'allaitement présente un risque systémique ou lacté négligeable. Une hygiène soigneuse et la manipulation sécuritaire autour du nourrisson constituent les points essentiels.',
  'earlobe.breastfeeding.c1': 'La cicatrisation du lobe n\'a aucun impact sur la lactation, la composition du lait ou l\'anatomie mammaire.',
  'earlobe.breastfeeding.c2': 'À mesure que le bébé grandit, le risque qu\'il s\'agrippe aux boucles d\'oreilles devient réel ; des clous discrets sont préférables.',
  'earlobe.breastfeeding.c3': 'Appliquez du sérum physiologique stérile deux fois par jour jusqu\'à consolidation complète du canal.',
  'earlobe.breastfeeding.q1': 'Existe-t-il la moindre contre-indication médicale entre perçage des lobes et allaitement ?',
  'earlobe.breastfeeding.q2': 'Quels soins locaux sans danger pour mon bébé me conseillez-vous ?',
  'earlobe.breastfeeding.source': 'Raisonnement clinique général - profil de risque systémique négligeable.',

  // PMU: Trying to Conceive
  'pmu.trying.summary': 'Le maquillage permanent associe l\'implantation intradermique de pigments à l\'application d\'anesthésiques topiques (comme la lidocaïne). La planification par rapport aux essais de grossesse mérite d\'être évoquée.',
  'pmu.trying.c1': 'Les anesthésiques locaux topiques traversent la barrière cutanée lésée et pénètrent dans la circulation sanguine maternelle.',
  'pmu.trying.c2': 'Les pigments conformes au règlement (UE) 2020/2081 écartent les molécules dangereuses, mais les études pharmacocinétiques fœtales sur les encres de microblading font défaut.',
  'pmu.trying.c3': 'La programmation des séances de retouche (souvent 6–8 semaines après la première séance) doit prendre en compte un éventuel début de grossesse.',
  'pmu.trying.q1': 'Quel délai dois-je respecter entre un maquillage permanent avec anesthésie locale et le début des essais de conception ?',
  'pmu.trying.q2': 'Quels sont les risques associés à la séance de retouche obligatoire si je tombe enceinte entre deux rendez-vous ?',
  'pmu.trying.source': 'Directives de l\'ACOG sur les actes dermatologiques et esthétiques ; règlement (UE) 2020/2081.',

  // PMU: First Trimester
  'pmu.first.summary': 'Le maquillage permanent au premier trimestre conjugue l\'exposition à des pigments intradermiques et l\'usage d\'anesthésiques topiques pendant la phase vulnérable de l\'organogenèse.',
  'pmu.first.c1': 'Les anesthésiques topiques (lidocaïne, prilocaïne, tétracaïne) passent dans la circulation générale ; leur emploi pour des actes esthétiques pendant l\'organogenèse est proscrit par précaution.',
  'pmu.first.c2': 'Les bouleversements hormonaux du début de grossesse modifient la séborrhée cutanée, ce qui peut compromettre la prise homogène des pigments.',
  'pmu.first.c3': 'Les praticiens professionnels en dermo-pigmentation refusent toute intervention au premier trimestre ; faites le point sur le calendrier avec votre médecin.',
  'pmu.first.q1': 'Quelles sont vos recommandations médicales concernant les crèmes anesthésiantes locales (lidocaïne/EMLA) au cours du premier trimestre ?',
  'pmu.first.q2': 'Comment les hormones du début de grossesse influencent-elles la cicatrisation cutanée et le risque d\'hyperpigmentation post-inflammatoire ?',
  'pmu.first.source': 'Avis du comité de l\'ACOG sur les actes esthétiques programmés ; recommandations cliniques du RCOG.',

  // PMU: Second Trimester
  'pmu.second.summary': 'Au deuxième trimestre, l\'absorption des anesthésiques topiques et les modifications pigmentaires de la peau (chloasma / masque de grossesse) sont au cœur des discussions médicales.',
  'pmu.second.c1': 'Les hormones de grossesse stimulent les mélanocytes ; un microblading ou une dermo-pigmentation des lèvres peut cicatriser de façon irrégulière ou virer sous l\'effet de l\'hyperpigmentation.',
  'pmu.second.c2': 'Les formules anesthésiantes locales nécessitent toujours l\'accord préalable de votre professionnel de santé.',
  'pmu.second.c3': 'La vascularisation accrue du visage peut provoquer des micro-saignements qui expulsent le pigment hors des incisions du microblading.',
  'pmu.second.q1': 'Le masque de grossesse (mélasma) risque-t-il de rendre le résultat du maquillage permanent tacheté ou asymétrique ?',
  'pmu.second.q2': 'Votre cabinet autorise-t-il l\'usage de lidocaïne topique pour un acte esthétique du visage au deuxième trimestre ?',
  'pmu.second.source': 'Raisonnement clinique général ; directives de la British Association of Dermatologists sur les actes esthétiques pendant la grossesse.',

  // PMU: Third Trimester
  'pmu.third.summary': 'Au troisième trimestre, les actes de maquillage permanent sont généralement différés en raison des protocoles d\'anesthésie, des œdèmes faciaux et de la posture prolongée.',
  'pmu.third.c1': 'La rétention liquidienne et les gonflements du visage faussent la symétrie naturelle des sourcils ou des lèvres, menant à des tracés asymétriques après l\'accouchement.',
  'pmu.third.c2': 'Rester inclinée sur un fauteuil de soin pendant plus de 2 heures peut comprimer la veine cave et entraîner des vertiges orthostatiques.',
  'pmu.third.c3': 'Éviter toute effraction cutanée élective et tout risque infectieux à l\'approche du terme est la recommandation obstétricale classique.',
  'pmu.third.q1': 'Dans quelle mesure les gonflements du visage près du terme peuvent-ils altérer la précision du maquillage permanent ?',
  'pmu.third.q2': 'En cas de réaction inflammatoire ou allergique inattendue proche du terme, quels traitements peuvent être prescrits en toute sécurité ?',
  'pmu.third.source': 'Raisonnement clinique général - report des interventions esthétiques en fin de gestation.',

  // PMU: Breastfeeding
  'pmu.breastfeeding.summary': 'Le maquillage permanent durant l\'allaitement soulève la question du passage des anesthésiques topiques dans le lait maternel et de la prévention infectieuse.',
  'pmu.breastfeeding.c1': 'La lidocaïne en application cutanée a une absorption générale faible mais peut diffuser en traces dans le lait ; caler les tétées avec votre sage-femme est recommandé.',
  'pmu.breastfeeding.c2': 'Les particules de pigments demeurent localisées dans le derme et les ganglions régionaux, sans passage lacté mis en évidence.',
  'pmu.breastfeeding.c3': 'Le manque de sommeil et les ajustements hormonaux peuvent ralentir la réépithélialisation superficielle des sourcils pigmentés.',
  'pmu.breastfeeding.q1': 'Combien d\'heures après l\'application de lidocaïne pour mes sourcils ou mes lèvres dois-je attendre avant de donner le sein ?',
  'pmu.breastfeeding.q2': 'Quels soins nettoyants et pommades cicatrisantes puis-je utiliser sans danger au contact de mon nourrisson ?',
  'pmu.breastfeeding.source': 'Directives du NHS sur les anesthésiques locaux et l\'allaitement ; raisonnement clinique général.',

  // Laser Removal: Trying to Conceive
  'removal.trying.summary': 'Le détatouage laser fragmente les pigments en particules microscopiques éliminées par les macrophages, le système lymphatique et les reins. La chronologie des séances autour de la conception doit être discutée.',
  'removal.trying.c1': 'La fragmentation entraîne un relargage systémique de résidus pigmentaires et de médiateurs inflammatoires pendant plusieurs semaines après la séance.',
  'removal.trying.c2': 'Le devenir pharmacologique et le passage transplacentaire de ces nanoparticules lors de la conception précoce ne sont pas documentés par des essais cliniques.',
  'removal.trying.c3': 'Les centres laser recommandent fréquemment d\'achever les cycles de traitement ou d\'observer une pause planifiée avant d\'entamer les essais bébé.',
  'removal.trying.q1': 'Combien de temps faut-il à l\'organisme pour éliminer les débris d\'encre fragmentés après une séance de laser ?',
  'removal.trying.q2': 'Me conseillez-vous d\'interrompre mes séances de détatouage pendant que nous essayons de concevoir ?',
  'removal.trying.source': 'Recommandations sur le laser de la British Association of Dermatologists ; raisonnement clinique général.',

  // Laser Removal: First Trimester
  'removal.first.summary': 'Le détatouage laser au premier trimestre libère des nanoparticules d\'encre circulantes et induit un stress thermique et inflammatoire intense en pleine organogenèse.',
  'removal.first.c1': 'La photothermolyse laser pulvérise les pigments en particules submicroniques qui pénètrent dans les circulations lymphatique et systémique.',
  'removal.first.c2': 'L\'innocuité fœtale de ces nanoparticules circulantes durant les semaines 1–12 (organogenèse) n\'a jamais été établie sur le plan médical.',
  'removal.first.c3': 'Les doses élevées d\'anesthésiques topiques ou injectables requises lors des séances de laser constituent une exposition médicamenteuse superflue.',
  'removal.first.c4': 'Les dermatologues et centres laser reportent systématiquement le détatouage après la grossesse ; abordez le calendrier avec votre praticien.',
  'removal.first.q1': 'Pour quelles raisons médicales précises les dermatologues ajournent-ils le détatouage laser durant le premier trimestre ?',
  'removal.first.q2': 'Si j\'ai effectué une séance laser avant de savoir que j\'étais enceinte, que devons-nous surveiller lors de la prochaine consultation ?',
  'removal.first.source': 'Directives de l\'ACOG sur les dispositifs laser et esthétiques pendant la grossesse ; consensus de pharmacologie clinique.',

  // Laser Removal: Second Trimester
  'removal.second.summary': 'Le détatouage laser au deuxième trimestre demeure un sujet prioritaire à évoquer avec votre médecin, les risques de passage particulaire et d\'hyperpigmentation cutanée persistant.',
  'removal.second.c1': 'La production accrue de mélanine sous l\'effet des hormones augmente nettement le risque d\'hyperpigmentation post-inflammatoire ou d\'hypopigmentation définitive sur la zone traitée.',
  'removal.second.c2': 'Le processus de clairance lymphatique des pigments fragmentés demeure actif durant 6–8 semaines après chaque passage du laser.',
  'removal.second.c3': 'Reporter les séances après l\'accouchement est la recommandation unanime des médecins spécialistes du laser et des obstétriciens.',
  'removal.second.q1': 'L\'imprégnation pigmentaire liée à ma grossesse accroît-elle le risque de cicatrices ou de taches indélébiles dues au laser ?',
  'removal.second.q2': 'Y a-t-il le moindre danger à laisser mon tatouage partiellement effacé jusqu\'à la période post-partum ?',
  'removal.second.source': 'British Association of Dermatologists ; raisonnement clinique général.',

  // Laser Removal: Third Trimester
  'removal.third.summary': 'Le détatouage laser en fin de grossesse ajoute une charge inflammatoire superflue, un stress thermique et des risques de complications cutanées à l\'approche du terme.',
  'removal.third.c1': 'Les phlyctènes, brûlures superficielles et risques infectieux inhérents aux séances de laser créent un inconfort maternel évitable près du terme.',
  'removal.third.c2': 'La réponse inflammatoire systémique peut majorer la température corporelle et accélérer le rythme cardiaque maternel.',
  'removal.third.c3': 'La position requise et la mobilité sont fortement gênées au cours du troisième trimestre.',
  'removal.third.q1': 'Quels risques une brûlure ou une cloque provoquée par le laser poserait-elle en cas de déclenchement inopiné du travail ?',
  'removal.third.q2': 'Quel délai après l\'accouchement est considéré comme opportun pour reprendre les séances de laser ?',
  'removal.third.source': 'Raisonnement clinique général - report des interventions laser électives en fin de gestation.',

  // Laser Removal: Breastfeeding
  'removal.breastfeeding.summary': 'Durant l\'allaitement, les nanoparticules d\'encre fragmentées éliminées par les macrophages transitent par le système lymphatique. Le passage de métabolites résiduels dans le lait n\'est pas formellement documenté.',
  'removal.breastfeeding.c1': 'Les données sur le passage dans le lait maternel des particules d\'encre libérées par le laser sont très limitées ; c\'est pourquoi la prudence est généralement conseillée.',
  'removal.breastfeeding.c2': 'Les séances de laser nécessitent fréquemment des crèmes anesthésiantes puissantes qui demandent une grande prudence chez la femme qui allaite.',
  'removal.breastfeeding.c3': 'Différer le traitement laser jusqu\'au sevrage élimine toute interrogation quant à une exposition chimique du nourrisson.',
  'removal.breastfeeding.q1': 'Des débris d\'encre fragmentés par le laser peuvent-ils se retrouver dans mon lait maternel ?',
  'removal.breastfeeding.q2': 'Conseillez-vous d\'attendre le sevrage complet de mon enfant avant de redémarrer le détatouage laser ?',
  'removal.breastfeeding.source': 'Directives cliniques du RCOG et du NHS sur les soins pendant l\'allaitement ; raisonnement clinique général.'
,

  // Additional Improvements (Features 1-7)
  'nav.mode_reference': 'Référence d\'acte unique',
  'nav.mode_compare': 'Matrice comparative des actes',
  'nav.mode_hospital': 'Protocole hospitalier et maternité',
  'nav.mode_navel': 'Guide d\'expansion tissulaire du nombril',
  'nav.mode_nipple': 'Guide mamelon et allaitement',
  'nav.mode_postpartum': 'Calendrier de reprise post-partum',
  'nav.mode_triage': 'Triage des complications',
  'worksheet.custom_notes_title': 'Vos notes personnelles et questions à aborder',
  'worksheet.custom_notes_desc': 'Ajoutez vos questions personnelles, l\'historique de vos piercings ou vos sujets spécifiques à aborder avec votre soignant avant impression :',
  'worksheet.custom_notes_placeholder': 'Saisissez vos questions ou remarques ici (ex. : "Aborder mon piercing au nombril lors de l\'accouchement", "Signaler ma césarienne programmée à 39 SA")...',
  'worksheet.print_client_notes_title': 'Notes de la patiente et questions spécifiques à aborder :',
  'compare.title': 'Matrice comparative des actes côte à côte',
  'compare.subtitle': 'Sélectionnez deux ou trois combinaisons d\'acte et de stade pour évaluer en parallèle leurs priorités de dialogue, leurs justifications physiologiques et leurs points d\'échange.',
  'compare.col_heading': 'Scénario {num}',
  'compare.select_proc': 'Sélectionner l\'acte',
  'compare.select_stage': 'Sélectionner le stade',
  'compare.clear_btn': 'Réinitialiser la matrice',
  'compare.prompt': 'Sélectionnez un acte et un stade pour au moins deux colonnes ci-dessus afin de comparer les considérations cliniques côte à côte.',
  'compare.priority_label': 'Priorité d\'échange',
  'compare.rationale_label': 'Raisonnement clinique',
  'compare.considerations_label': 'Facteurs physiologiques clés',
  'compare.source_label': 'Base d\'éléments probants',
  'hospital.title': 'Planificateur des politiques de bijoux en maternité et bloc opératoire',
  'hospital.subtitle': 'Liste de vérification structurée à aborder lors de votre consultation prénatale des 36 SA concernant l\'électrocoagulation, l\'accouchement d\'urgence et le contact néonatal.',
  'hospital.intro': 'Les protocoles hospitaliers relatifs aux bijoux corporels lors de l\'accouchement varient selon les maternités, les règles de bloc opératoire et les réseaux de santé. Faites le point avec votre sage-femme ou obstétricien avant vos 36 SA.',
  'hospital.item1_title': 'Matériel d\'électrocoagulation et diathermie monopolaire',
  'hospital.item1_desc': 'En cas de césarienne non programmée ou d\'urgence, les dispositifs de bistouri électrique monopolaire créent un circuit électrique traversant le corps. Des bijoux métalliques conducteurs peuvent engendrer un risque de brûlure thermique localisée s\'ils se situent sur le trajet entre le site opératoire et la plaque de dispersion neutre.',
  'hospital.item2_title': 'Gestion des voies aériennes d\'urgence et anesthésie',
  'hospital.item2_desc': 'Les bijoux buccaux, labiaux, linguaux ou nasaux présentent des risques d\'obstruction des voies respiratoires ou de déplacement lors d\'une intubation trachéale d\'urgence ou d\'une ventilation au masque si une anesthésie générale s\'impose.',
  'hospital.item3_title': 'Bijoux pelviens, génitaux et périnéaux',
  'hospital.item3_desc': 'Les piercings génitaux ou périnéaux constituent un danger direct de déchirure ou de lacération lors du passage fœtal et de l\'étirement tissulaire, et entravent la réalisation d\'une épisiotomie ou d\'une réfection périnéale. Les maternités exigent systématiquement leur retrait complet avant le travail actif.',
  'hospital.item4_title': 'Contact cutané et manipulation du nouveau-né',
  'hospital.item4_desc': 'Les bijoux du visage, du cou, des poignets ou du torse peuvent occasionner des écorchures accidentelles sur la peau fragile du nouveau-né lors du peau-à-peau immédiat, des manipulations en salle d\'accouchement et des premières tétées.',
  'hospital.item5_title': 'Imagerie par résonance magnétique diagnostique (IRM)',
  'hospital.item5_desc': 'Si une imagerie médicale urgente en post-partum s\'avère nécessaire, les bijoux métalliques ferromagnétiques présentent des risques d\'effet projectile magnétique, de torsion tissulaire et d\'échauffement par radiofréquence.',
  'hospital.action_title': 'Points d\'action pour l\'échange des 36 SA avec la sage-femme',
  'hospital.action1': 'Interrogez votre sage-femme sur la réglementation exacte de la maternité et du bloc opératoire de votre établissement de naissance.',
  'hospital.action2': 'Demandez l\'inscription dans votre dossier de maternité de l\'autorisation éventuelle de retainers inertes non métalliques sur les sites non opératoires.',
  'hospital.action3': 'Prévoyez le retrait de tous vos bijoux oraux, faciaux, génitaux et abdominaux bien avant la date présumée d\'accouchement, ou sollicitez l\'aide d\'un perceur professionnel pour les fermetures difficiles.',
  'hospital.product_note_title': 'Note produit : Retainers inertes non métalliques',
  'hospital.product_note_body': 'Les retainers non conducteurs et non métalliques en copolymère statistique PP-R ou en autres polymères non conducteurs de qualité implant ne conduisent pas le courant électrique et ne sont pas ferromagnétiques. Ils sont souvent utilisés pour garder ouvert un canal de piercing formé lorsque le protocole de l\'établissement autorise les retainers non métalliques. Les règles de bloc opératoire et d\'anesthésie restent sous l\'autorité de l\'équipe médicale et chirurgicale présente, qui a le dernier mot sur tout corps étranger.',
  'navel.title': 'Guide visuel d\'expansion tissulaire du nombril',
  'navel.subtitle': 'Modèles didactiques de contraintes mécaniques illustrant l\'expansion de la paroi abdominale, les forces de cisaillement et la distorsion du canal au fil des trimestres.',
  'navel.intro': 'À mesure que l\'utérus gravide distend la paroi abdominale antérieure, le canal ombilical subit d\'importantes tensions directionnelles. Ce guide visuel illustre l\'évolution de ces forces au cours de la grossesse.',
  'navel.t1_title': 'Pré-conception / Premier trimestre : Géométrie au repos',
  'navel.t1_desc': 'La profondeur tissulaire est normale et la tension minimale. Le canal du piercing repose verticalement dans le tissu adipeux sous-cutané sans distorsion de la paroi abdominale.',
  'navel.t2_title': 'Deuxième trimestre : Expansion latérale et longitudinale',
  'navel.t2_desc': 'Le volume utérin croissant efface la dépression ombilicale. La peau subit une tension multidirectionnelle continue, exerçant des contraintes de cisaillement contre les extrémités rigides du bijou.',
  'navel.t3_title': 'Troisième trimestre : Cisaillement mécanique sévère et éversion',
  'navel.t3_desc': 'La distension maximale peut provoquer l\'éversion du nombril (saillie vers l\'extérieur). La pression dermique étire et affine la peau sur le bijou rigide, augmentant fortement le risque de migration, de déchirure ou de cicatrice hypertrophique irréversible.',
  'navel.stress_points_title': 'Points clés de contrainte mécanique à aborder avec votre soignant',
  'navel.stress_p1': 'Un amincissement cutané visible au niveau des orifices indique une tension excessive imposant le retrait immédiat du bijou pour prévenir la rupture du canal.',
  'navel.stress_p2': 'Les bananes métalliques courbées rigides ne peuvent épouser l\'arrondi changeant du ventre, entraînant des points de nécrose par pression au contact des billes.',
  'navel.stress_p3': 'L\'aplatissement du nombril supprime la cavité protectrice naturelle, exposant le bijou aux frottements directs des ceintures de vêtements et bandeaux de grossesse.',
  'navel.sizing_link_prefix': 'Pour consulter les dimensions techniques des bijoux, les correspondances de calibres et les longueurs de tiges, référez-vous au',
  'navel.sizing_link_text': 'Visualiseur de tailles de bijoux',
  'navel.sizing_link_suffix': '. Ne tentez jamais d\'élargissement ou de changement de taille non guidé pendant la grossesse ; échangez sur tout changement de bijou avec votre perceur professionnel et votre sage-femme.',
  'navel.product_note_title': 'Note produit : Retainers ombilicaux flexibles',
  'navel.product_note_body': 'Patrick Poli, créateur des bijoux de corps BioFlex®, a choisi pour eux un copolymère statistique PP-R souple afin qu\'ils suivent les courbures anatomiques évolutives sans créer de points de pression rigides. Le PP-R est moulé par injection en une seule pièce monobloc ; ce n\'est pas du PTFE (qui doit être usiné à partir de barres extrudées et tend à perdre son orientation). Si la tension cutanée génère rougeur, douleur ou amincissement au nombril, retirez le bijou sans attendre, quel que soit le matériau.',
  'nipple.title': 'Guide mamelon et chronologie de l\'allaitement',
  'nipple.subtitle': 'Repères sur la mécanique de l\'allaitement, le retrait des bijoux avant chaque tétée, la sécurité respiratoire du nourrisson et le moment de consulter une professionnelle de l\'allaitement.',
  'nipple.intro': 'Les piercings aux mamelons requièrent une vigilance particulière pendant la grossesse et la lactation afin de protéger l\'alimentation du nourrisson et d\'éviter des complications physiques sévères.',
  'nipple.choking_title': 'Sécurité vitale des voies aériennes du nourrisson : retrait des bijoux avant chaque tétée ou expression',
  'nipple.choking_desc': 'Tout bijou, bille, élément décoratif ou retainer maintenu sur un mamelon présente un danger immédiat et mortel d\'étouffement, d\'inhalation bronchique et d\'obstruction respiratoire pour l\'enfant pendant la tétée ou le tirage du lait. L\'intégralité des bijoux doit être retirée avant toute prise au sein ou utilisation d\'un tire-lait.',
  'nipple.mech_title': 'Mécanique de la lactation et dynamique d\'écoulement du lait',
  'nipple.mech_desc': 'Le mamelon humain comprend entre 4 et 18 pores galactophores distincts. Les canaux de piercing cicatrisés traversent ou côtoient fréquemment plusieurs de ces canaux. Le lait peut s\'écouler librement à la fois par les pores naturels et par les orifices d\'entrée et de sortie du piercing lors de la montée de lait.',
  'nipple.latch_title': 'Qualité de prise du sein et étanchéité palatine',
  'nipple.latch_desc': 'Le tissu cicatriciel local consécutif à un piercing peut modifier la souplesse et la projection naturelle du mamelon lorsque le bébé cherche à l\'étirer profondément contre son palais mou, pouvant provoquer un inconfort maternel ou une prise de sein superficielle.',
  'nipple.consult_title': 'Accompagnement par une consultante en lactation ou sage-femme',
  'nipple.consult_desc': 'Ne procédez jamais à une auto-évaluation de la perméabilité de vos canaux ou de la densité cicatricielle. En cas d\'engorgement localisé, de douleur ou de difficulté de prise au sein, prenez rendez-vous pour un examen présentiel avec une consultante en lactation certifiée IBCLC ou une sage-femme.',
  'nipple.infection_title': 'Risque de mastite et traumatismes de réinsertion',
  'nipple.infection_desc': 'L\'insertion et le retrait répétés d\'un bijou dans un canal fragilisé entre les tétées introduisent la flore cutanée directement dans les sinus lactifères, augmentant considérablement le risque de mastite infectieuse.',
  'postpartum.title': 'Calendrier didactique de reprise post-partum',
  'postpartum.subtitle': 'Jalons physiologiques relatifs à la cicatrisation tissulaire, la récupération immunitaire, la normalisation hémodynamique et la stabilisation hormonale avant de planifier un acte corporel.',
  'postpartum.intro': 'La reprise d\'actes corporels électifs après l\'accouchement répond à des étapes physiologiques maternelles complexes et non à une date calendaire arbitraire. Faites le point sur ces phases avec votre médecin ou sage-femme lors de la consultation postnatale.',
  'postpartum.p1_title': 'Semaines 0 à 6 : Suites de couches immédiates et rétablissement hémodynamique',
  'postpartum.p1_desc': 'L\'involution utérine, l\'écoulement des lochies, la cicatrisation de la plaie placentaire et les variations volémiques massives mobilisent l\'organisme. Le système immunitaire émerge de la modulation gestationnelle ; tout traumatisme cutané électif est déconseillé sur le plan clinique.',
  'postpartum.p2_title': 'Semaines 6 à 12 : Examen postnatal principal et consolidation cicatricielle',
  'postpartum.p2_desc': 'Après validation lors de la consultation postnatale des 6 semaines, les plaies périnéales ou cicatrices de césarienne sont consolidées. Néanmoins, la fatigue maternelle, le fractionnement du sommeil et l\'installation de la lactation continuent d\'influencer la réponse immunitaire systémique.',
  'postpartum.p3_title': 'Mois 3 à 6 : Normalisation hormonale et remodelage tissulaire',
  'postpartum.p3_desc': 'La laxité des tissus conjonctifs induite par la relaxine diminue progressivement. En l\'absence d\'allaitement, l\'intégrité de la barrière cutanée, la réactivité vasculaire et les défenses immunitaires retrouvent leur niveau de base.',
  'postpartum.p4_title': 'Période d\'allaitement jusqu\'au sevrage : Considérations continues',
  'postpartum.p4_desc': 'Durant toute la période de lactation active, l\'imprégnation en prolactine suspend les cycles ovulatoires réguliers et modifie l\'hydratation tissulaire. Le détatouage laser et les pigments cosmétiques électifs soulèvent des questions constantes quant à la sécurité du nourrisson et la stabilité des pigments.',
  'postpartum.closing_title': 'Recommandation clinique sur le calendrier',
  'postpartum.closing_desc': 'La vitesse de récupération individuelle varie nettement selon les modalités d\'accouchement, les pertes sanguines, l\'état nutritionnel et les rythmes d\'alimentation du nouveau-né. Discutez toujours du calendrier de tout acte directement avec votre obstétricien, médecin traitant ou sage-femme avant de réserver.',
  'triage.title': 'Référence de triage des complications sur piercings et tatouages existants',
  'triage.subtitle': 'Distinction clinique entre une irritation mécanique liée à la distension cutanée et les signes cliniques imposant une prise en charge médicale urgente par un médecin ou une sage-femme.',
  'triage.intro': 'Cette référence permet de distinguer les tensions physiques non urgentes des infections cliniques localisées ou systémiques graves. Cet outil ne formule aucun diagnostic ni autorisation médicale ; tout symptôme requiert un avis clinique professionnel.',
  'triage.cat_mechanical': 'Irritation mécanique (tension physique localisée)',
  'triage.cat_medical': 'Signes exigeant une consultation médicale urgente',
  'triage.mech_sym1': 'Érythème discret (rougeur) strictement limité au pourtour immédiat des orifices, sans chaleur diffuse.',
  'triage.mech_sym2': 'Absence totale de fièvre, de frissons, de courbatures ou d\'altération de l\'état général.',
  'triage.mech_sym3': 'Sécrétion séreuse lymphatique claire ou paille qui sèche en petites croûtes, sans odeur nauséabonde.',
  'triage.mech_sym4': 'Gêne qui régresse rapidement dès que la compression vestimentaire, l\'élastique ou le bijou rigide est libéré.',
  'triage.mech_action': 'Conduite : Desserrer les vêtements serrés, proscrire tout contact avec des mains non lavées et consulter votre perceur pour adapter la taille du bijou. Si les signes persistent ou augmentent, contactez votre sage-femme ou médecin.',
  'triage.med_sym1': 'Érythème extensif, chaud et lancinant s\'étendant au-delà des limites du piercing ou du tatouage.',
  'triage.med_sym2': 'Symptômes généraux comprenant une température corporelle élevée (> 38 °C), des frissons, une tachycardie ou un malaise maternel.',
  'triage.med_sym3': 'Écoulement purulent épais, opaque, jaunâtre ou verdâtre dégageant une odeur fétide caractéristique.',
  'triage.med_sym4': 'Traînées rouges linéaires (lymphangite) progressant depuis la lésion vers les ganglions lymphatiques régionaux.',
  'triage.med_sym5': 'Amincissement rapide de la peau présentant un risque imminent de déchirure complète ou d\'extrusion du bijou.',
  'triage.med_action': 'Conduite : Consultez sans délai votre obstétricien, médecin traitant, sage-femme ou un service d\'urgences médicales. N\'attendez pas une consultation en studio.'
};

const I18N_IT = {
  // Search Bar & Filter Strings
  'search.placeholder': 'Cerca linee guida cliniche, argomenti o materiali (es. piercing, ombelico, mastite)...',
  'search.clear_btn': 'Cancella ricerca',
  'search.filter_all': 'Tutti gli argomenti',
  'search.filter_procedures': 'Procedure',
  'search.filter_guidelines': 'Linee guida specialistiche',
  'search.results_count': '{count} argomento/i clinico/i trovato/i per "{query}"',
  'search.no_results_title': 'Nessun argomento clinico trovato',
  'search.no_results_desc': 'Prova a cercare per tipologia di procedura (tatuaggio, piercing, trucco permanente), periodo (primo trimestre, allattamento) o questione specifica (tensione ombelicale, vie aeree, mastite, segni di infezione).',
  'search.item_category_procedure': 'Riferimento di sicurezza della procedura',
  'search.item_category_guideline': 'Linee guida e temi clinici',
  'search.view_action': 'Visualizza argomento',

  // Page Metadata
  'meta.title': 'Riferimento di sicurezza sulle procedure in gravidanza e allattamento | Poli International',
  'meta.description': 'Punto di partenza clinico e ragionato per il confronto con il proprio medico o ostetrica su tatuaggi, piercing e trucco permanente in gravidanza e allattamento.',

  // Header & Navigation
  'app.badge': 'Riferimento clinico e da studio',
  'app.title': 'Sicurezza delle procedure: gravidanza e allattamento',
  'app.subtitle': 'Una guida clinica ragionata per dialogare con il proprio medico o la propria ostetrica su tatuaggi, piercing e trucco permanente.',
  'app.lang_label': 'Lingua:',

  // Language Dropdown Options
  'lang.en': 'Inglese',
  'lang.de': 'Tedesco',
  'lang.fr': 'Francese',
  'lang.es': 'Spagnolo',
  'lang.it': 'Italiano',
  'lang.nl': 'Olandese',
  'lang.pt': 'Portoghese',

  // Form Controls
  'form.procedure_label': 'Tipo di procedura',
  'form.stage_label': 'Fase attuale',
  'form.procedure_placeholder': '- Seleziona la procedura -',
  'form.stage_placeholder': '- Seleziona la fase -',

  // Procedures
  'proc.tattoo': 'Nuovo tatuaggio',
  'proc.piercing': 'Piercing corporeo (non all\'orecchio)',
  'proc.earlobe': 'Piercing al lobo dell\'orecchio',
  'proc.pmu': 'Trucco permanente / microblading',
  'proc.removal': 'Rimozione laser del tatuaggio',

  // Stages
  'stage.trying': 'Ricerca di una gravidanza (periodo preconcezionale)',
  'stage.first': 'Primo trimestre (settimane 1–12)',
  'stage.second': 'Secondo trimestre (settimane 13–26)',
  'stage.third': 'Terzo trimestre (settimane 27–40)',
  'stage.breastfeeding': 'Allattamento / post-partum',

  // Prompt / Empty State
  'prompt.title': 'Seleziona una procedura e una fase',
  'prompt.body': 'Seleziona una procedura di body art e la tua fase di gravidanza o allattamento per visualizzare spunti clinici dedicati e un promemoria stampabile di domande.',

  // Priority Tier Headings
  'tier1.tag': 'Livello di priorità 1: confronto tempestivo',
  'tier1.title': 'Alta priorità: da discutere subito con il proprio medico o ostetrica',
  'tier1.sub': 'Fattori fisiologici attivi, sviluppo embrionale o distensione tissutale richiedono una valutazione clinica preventiva prima di prenotare.',
  'tier2.tag': 'Livello di priorità 2: confronto programmato',
  'tier2.title': 'Confronto programmato con il proprio medico o ostetrica',
  'tier2.sub': 'I cambiamenti fisiologici materni influenzano guarigione o posizionamento; affrontali alla prossima visita prenatale programmata.',
  'tier3.tag': 'Livello di priorità 3: confronto di routine',
  'tier3.title': 'Confronto di routine con il proprio medico o ostetrica',
  'tier3.sub': 'Minore complessità della procedura; illustra i protocolli sterili standard e la cura post-trattamento al tuo team curante.',

  // Section Titles
  'section.summary': 'Motivazione clinica',
  'section.considerations': 'Considerazioni cliniche e fisiologiche',
  'section.checklist': 'Domande per il proprio medico o ostetrica',
  'section.checklist_intro': 'Seleziona le domande che desideri porre alla tua ostetrica, ginecologo o medico curante alla prossima visita:',
  'section.provenance': 'Origine e fondamento delle evidenze',
  'section.authority_title': 'Autorità decisionale del team sanitario',
  'section.authority_body': 'Questo strumento offre indicazioni cliniche generali. Il tuo medico o la tua ostetrica conoscono la tua anamnesi specifica, gli esami ematici e l\'andamento gestazionale, e sono gli unici decisori clinici per la tua salute.',
  'section.product_note_title': 'Nota sul prodotto: materiali per gioielli da piercing',
  'section.sibling_title': 'Strumenti clinici di consultazione correlati',
  'section.print_btn': 'Stampa promemoria domande',
  'section.meta_reviewed': 'Ultima revisione:',
  'section.meta_date': 'Settembre 2026',
  'section.meta_source': 'Basi della revisione clinica:',

  // Provenance Legal Instruments
  'provenance.eu_instrument_prefix': 'Atto legislativo ufficiale:',
  'provenance.eu_instrument_name': 'Regolamento (UE) 2020/2081 della Commissione (allegato XVII del REACH: inchiostri per tatuaggi e trucco permanente)',

  // Printout Ruled Area & Header
  'print.doc_title': 'Riferimento per il colloquio con il medico curante',
  'print.patient_date': 'Data:',
  'print.notes_title': 'Note del colloquio clinico e piano di follow-up',
  'print.patient_copy': 'Copia per il colloquio della paziente',
  'print.clinician_signature': 'Firma del medico: _______________________',
  'print.gestational_age': 'Epoca gestazionale / Condizione: ________________',
  'print.footer_note': 'Questo documento offre spunti informativi ed educativi per il colloquio prenatale o post-partum. Non sostituisce la valutazione clinica personalizzata del proprio medico o ostetrica.',

  // Product Note Text
  'product_note.body': 'Patrick Poli, creatore dei gioielli per il corpo BioFlex®, ha scelto per essi un PP-R (copolimero random di polipropilene) perché il gioiello si adatti alle variazioni anatomiche. Materiali flessibili come i gioielli BioFlex® e i metalli di grado implantare sono opzioni a bassa reattività da valutare con un piercer professionista per piercing esistenti o in guarigione durante la gravidanza. Il PP-R è stampato a iniezione come pezzo monolitico unico; non è PTFE (che viene lavorato da barra estrusa). Consulta il tuo piercer e il personale sanitario per la scelta del gioiello durante la gestazione.',

  // Disclaimer
  'disclaimer.title': 'Avviso clinico importante:',
  'disclaimer.body': 'Questo strumento ha scopo puramente educativo e non sostituisce in alcun caso il parere, la diagnosi o il trattamento medico. Discuti sempre ogni procedura di body art con la tua ostetrica, ginecologo o medico curante prima di fissare un appuntamento.',

  // Sibling Tools
  'sibling.med_title': 'Controllo interazioni farmacologiche',
  'sibling.med_desc': 'Verifica le interazioni tra farmaci da prescrizione, terapie comuni e procedure di body art.',
  'sibling.migration_title': 'Rischio di migrazione e rigetto del piercing',
  'sibling.migration_desc': 'Valuta tensione fisica, profondità e movimenti anatomici che influenzano la stabilità del gioiello.',

  // Tattoo: Trying to Conceive
  'tattoo.trying.summary': 'I pigmenti per tatuaggio si depositano nel derma e nei linfonodi regionali. Sebbene non vi siano evidenze di effetti teratogeni prima del concepimento, qualsiasi infezione cutanea localizzata durante la fase di impianto richiede una gestione ostetrica mirata.',
  'tattoo.trying.c1': 'I dati clinici sulla circolazione sistemica delle nanoparticelle di inchiostro durante la finestra del concepimento sono limitati.',
  'tattoo.trying.c2': 'Un\'infezione cutanea grave che richieda terapia antibiotica durante le prime fasi dell\'impianto impone una scelta farmacologica rigorosa.',
  'tattoo.trying.c3': 'La composizione degli inchiostri è variabile; i prodotti conformi al Regolamento (UE) 2020/2081 limitano oltre 4.000 sostanze pericolose, ammine aromatiche e metalli pesanti.',
  'tattoo.trying.c4': 'Pianificare la seduta al di fuori della finestra fertile consente di escludere lo stato di gravidanza prima di affrontare il decorso di guarigione.',
  'tattoo.trying.q1': 'Se dovessi concepire subito dopo un tatuaggio, il processo di guarigione dermica può interferire con l\'impianto embrionale?',
  'tattoo.trying.q2': 'Quali classi di antibiotici vanno evitate in caso di complicanza cutanea mentre stiamo cercando una gravidanza?',
  'tattoo.trying.q3': 'La mia vaccinazione antitetanica e l\'immunità per l\'epatite B sono aggiornate prima di sottopormi a procedure che lesionano la cute?',
  'tattoo.trying.source': 'Ragionamento clinico generale - nessuna linea guida isolata sulla fase preconcezionale pubblicata da ACOG o RCOG.',

  // Tattoo: First Trimester
  'tattoo.first.summary': 'Il primo trimestre (settimane 1–12) rappresenta il periodo cruciale dell\'organogenesi fetale. Qualsiasi infezione sistemica materna, febbre prolungata o cascata infiammatoria assume in questa fase una rilevanza clinica elevata.',
  'tattoo.first.c1': 'L\'organogenesi avviene principalmente tra la 3ª e l\'8ª settimana di gestazione, periodo in cui la stabilità fisiologica materna è essenziale.',
  'tattoo.first.c2': 'Le procedure che comportano lesioni cutanee comportano rischi di inoculazione batterica (stafilococco, streptococco) e di patogeni a trasmissione ematica.',
  'tattoo.first.c3': 'Nausea, iperemesi e alterazioni immunitarie del primo trimestre possono ostacolare la corretta guarigione e l\'igiene quotidiana della ferita.',
  'tattoo.first.c4': 'I tatuatori professionisti rifiutano di norma le clienti in gravidanza come procedura di gestione del rischio; concorda le tempistiche con il medico.',
  'tattoo.first.q1': 'Quali rischi sussistono per l\'organogenesi fetale se una procedura cutanea dovesse scatenare un\'infezione batterica imprevista?',
  'tattoo.first.q2': 'Come influiscono le modifiche immunitarie di inizio gravidanza sulla guarigione, e quali sintomi impongono un controllo immediato?',
  'tattoo.first.q3': 'Se ho un tatuaggio ancora in via di guarigione fatto prima di scoprire la gravidanza, quali segnali dobbiamo monitorare?',
  'tattoo.first.source': 'Linee guida ACOG sulle patologie cutanee in gravidanza; indicazioni NHS su gravidanza e tatuaggi.',

  // Tattoo: Second Trimester
  'tattoo.second.summary': 'Nel secondo trimestre (settimane 13–26) la fase primaria di organogenesi è superata, ma l\'aumento della volemia materna, la distensione cutanea e le variazioni nei liquidi incidono sul comfort e sulla cicatrizzazione.',
  'tattoo.second.c1': 'L\'aumento del volume ematico materno e la vasodilatazione cutanea possono causare maggiore sanguinamento ed ecchimosi durante l\'esecuzione.',
  'tattoo.second.c2': 'La rapida distensione della cute su addome, fianchi, seno e zona lombare altera l\'allineamento del pigmento e la geometria dell\'opera.',
  'tattoo.second.c3': 'La posizione seduta o distesa prolungata può comprimere la vena cava inferiore, riducendo il ritorno venoso e causando capogiri o lipotimie.',
  'tattoo.second.c4': 'Qualsiasi infezione cutanea insorta nel secondo trimestre necessita di una tempestiva valutazione medica con farmaci compatibili con la gravidanza.',
  'tattoo.second.q1': 'La pressione arteriosa, l\'eventuale diabete gestazionale o la reattività cutanea introducono rischi specifici?',
  'tattoo.second.q2': 'Quali aree corporee devono essere rigorosamente escluse in previsione dell\'espansione dei tessuti nei prossimi mesi?',
  'tattoo.second.q3': 'In che misura l\'incremento della volemia può influenzare il sanguinamento durante la seduta e i tempi di guarigione?',
  'tattoo.second.source': 'Indicazioni NHS su gravidanza e body art; ragionamento clinico generale.',

  // Tattoo: Third Trimester
  'tattoo.third.summary': 'Nell\'ultimo periodo di gravidanza (settimane 27–40), l\'incomodità posturale, la ritenzione idrica marcata e la vicinanza al parto rendono le nuove procedure cutanee un rischio di complicanza non necessario.',
  'tattoo.third.c1': 'Una ferita aperta in guarigione o un\'infezione batterica non risolta al momento del ricovero per il parto complica l\'assistenza ostetrica.',
  'tattoo.third.c2': 'La posizione supina durante sedute prolungate scatena la sindrome da ipotensione supina a causa della pressione dell\'utero sulla vena cava.',
  'tattoo.third.c3': 'Gli edemi diffusi e la forte tensione dei tessuti rendono arduo calibrare con precisione la profondità dell\'ago e la saturazione del colore.',
  'tattoo.third.c4': 'Lo stress fisico e il dolore prolungato possono indurre tachicardia materna e stanchezza fisica in prossimità del termine.',
  'tattoo.third.q1': 'Quali complicanze potrebbe comportare una ferita da tatuaggio in fase di guarigione al momento del ricovero in sala parto?',
  'tattoo.third.q2': 'Come incide la ritenzione idrica del terzo trimestre sulla dispersione dell\'inchiostro e sulla vulnerabilità alle infezioni?',
  'tattoo.third.q3': 'Se si sviluppasse un\'infezione cutanea a ridosso della data presunta del parto, come verrebbero gestiti i protocolli e gli accessi venosi?',
  'tattoo.third.source': 'Linee guida cliniche NHS sulla preparazione al parto; ragionamento clinico generale.',

  // Tattoo: Breastfeeding
  'tattoo.breastfeeding.summary': 'I pigmenti del tatuaggio vengono depositati nel derma e inglobati dai macrofagi; il passaggio di particelle integre nel latte materno non è stato riscontrato in letteratura. La prevenzione delle infezioni materne resta la priorità clinica.',
  'tattoo.breastfeeding.c1': 'I granuli di pigmento intatti sono troppo grandi per passare nel latte umano, sebbene i dati farmacocinetici sui frammenti rimangano limitati.',
  'tattoo.breastfeeding.c2': 'Un\'infezione cutanea contratta durante l\'allattamento richiede una terapia antibiotica compatibile con la sicurezza del neonato allattato.',
  'tattoo.breastfeeding.c3': 'L\'affaticamento post-parto e le interruzioni del sonno possono indebolire le difese immunitarie e rallentare la chiusura della lesione dermica.',
  'tattoo.breastfeeding.c4': 'I tatuatori professionisti consigliano comunemente di attendere che i ritmi di allattamento e la ripresa materna siano ben consolidati.',
  'tattoo.breastfeeding.q1': 'In caso di infezione cutanea localizzata durante l\'allattamento, quali antibiotici sono sicuri senza sospendere le poppate?',
  'tattoo.breastfeeding.q2': 'Quali tempistiche di recupero post-parto consiglia prima di affrontare una procedura con lesione cutanea non urgente?',
  'tattoo.breastfeeding.q3': 'Il mio bambino presenta condizioni particolari (come ittero o prematurità) che richiedono una cautela aggiuntiva verso infezioni materne?',
  'tattoo.breastfeeding.source': 'Indicazioni NHS su allattamento e body art; ragionamento clinico generale.',

  // Piercing: Trying to Conceive
  'piercing.trying.summary': 'Un nuovo piercing corporeo nel periodo preconcezionale richiede mesi di guarigione costante. La formazione del canale impegna il sistema immunitario ed è opportuno pianificare in anticipo i mutamenti anatomici della gravidanza.',
  'piercing.trying.c1': 'I piercing in sedi a elevata mobilità (ombelico, capezzoli) impiegano dai 6 ai 12 mesi per formare un tragitto epiteliale maturo e stabile.',
  'piercing.trying.c2': 'Se il concepimento avviene nelle prime fasi di guarigione, i successivi cambiamenti ormonali e vascolari possono allungare i tempi di recupero.',
  'piercing.trying.c3': 'Materiali biocompatibili e da impianto chirurgico prevengono le dermatiti da contatto e riducono la reattività dei tessuti.',
  'piercing.trying.q1': 'Se un nuovo piercing è in piena guarigione quando inizio la gravidanza, gli ormoni iniziali possono alterare la cicatrizzazione?',
  'piercing.trying.q2': 'Vi sono soluzioni detergenti o prodotti di medicazione locale da evitare se si sospetta una gravidanza?',
  'piercing.trying.source': 'Ragionamento clinico generale - nessuna linea guida isolata sul piercing preconcezionale da ACOG o RCOG.',

  // Piercing: First Trimester
  'piercing.first.summary': 'Creare un nuovo canale tissutale e inserire un corpo estraneo nel primo trimestre impegna il sistema immunitario materno nella delicata fase dell\'organogenesi.',
  'piercing.first.c1': 'La fistolizzazione è un processo infiammatorio attivo che richiede un dispendio immunitario continuo durante lo sviluppo embrionale.',
  'piercing.first.c2': 'Nausee mattutine, astenia e sbalzi ormonali del primo trimestre possono compromettere la regolarità della disinfezione quotidiana.',
  'piercing.first.c3': 'Una batteriemia sistemica originata da un piercing contaminato suscita forte apprensione clinica nelle settimane 1–12 di gravidanza.',
  'piercing.first.c4': 'Gli studi di piercing professionali rifiutano per prassi nuovi fori su clienti in gravidanza; concorda i tempi con il tuo specialista.',
  'piercing.first.q1': 'Quali sono i rischi clinici correlati alla guarigione di un nuovo corpo estraneo da parte dell\'organismo materno nelle settimane 1–12?',
  'piercing.first.q2': 'Se dovesse comparire un\'infezione nella sede del piercing, con quale tempestività devo richiedere una visita medica?',
  'piercing.first.q3': 'Quali manifestazioni cliniche distinguono la fisiologica infiammazione di un piercing da un\'infezione che necessita di antibiotici su ricetta?',
  'piercing.first.source': 'Consenso clinico ACOG; indicazioni NHS su gravidanza e cute.',

  // Piercing: Second Trimester
  'piercing.second.summary': 'Nel secondo trimestre i piercing corporei devono confrontarsi con rapidi cambiamenti anatomici. In particolare, i piercing all\'ombelico tendono a migrare con l\'espansione dell\'addome.',
  'piercing.second.c1': 'La distensione della parete addominale esercita una trazione verso l\'esterno sul foro dell\'ombelico, provocando spesso migrazione, assottigliamento o rigetto.',
  'piercing.second.c2': 'La vasodilatazione cutanea aumenta il sanguinamento locale e la reattività tissutale nei punti di inserimento.',
  'piercing.second.c3': 'I piercing già guariti possono spesso essere mantenuti se confortevoli, sostituendo se opportuno il gioiello con retainers flessibili non metallici.',
  'piercing.second.c4': 'Per le dinamiche generali di migrazione non legate alla gravidanza, gli studi rimandano a verifiche specialistiche sulla stabilità del piercing.',
  'piercing.second.q1': 'In che modo l\'espansione addominale influirà sul canale del mio piercing all\'ombelico nei prossimi mesi?',
  'piercing.second.q2': 'Sarà necessario rimuovere o sostituire i gioielli corporei in occasione delle ecografie ostetriche programmate?',
  'piercing.second.q3': 'Quali sintomi indicano che il piercing è sottoposto a una tensione fisica eccessiva a causa dell\'espansione dei tessuti?',
  'piercing.second.source': 'Guida NHS sui piercing corporei in gravidanza; ragionamento clinico generale.',

  // Piercing: Third Trimester
  'piercing.third.summary': 'L\'esecuzione di nuovi piercing corporei nel terzo trimestre è sconsigliata dalle équipe ostetriche a causa dell\'imminenza del parto e delle norme ospedaliere sui corpi estranei.',
  'piercing.third.c1': 'I reparti maternità richiedono di norma la rimozione dei gioielli metallici prima di interventi chirurgici, cesarei d\'urgenza o elettrochirurgia per evitare ustioni.',
  'piercing.third.c2': 'Un tragitto di piercing fresco e non cicatrizzato vicino al momento del parto costituisce una potenziale porta d\'ingresso infettiva del tutto evitabile.',
  'piercing.third.c3': 'La ritenzione idrica avanzata e i continui cambi posturali provocano fastidio e compressione sui nuovi piercing corporei.',
  'piercing.third.q1': 'Qual è il protocollo specifico della vostra struttura ospedaliera sui gioielli durante travaglio, parto o un eventuale taglio cesareo?',
  'piercing.third.q2': 'Se ho un piercing già consolidato che vorrei preservare durante il parto, sono ammessi retainers flessibili non metallici?',
  'piercing.third.source': 'Protocolli clinici NHS e RCOG per travaglio, parto e sale operatorie.',

  // Piercing: Breastfeeding
  'piercing.breastfeeding.summary': 'I piercing ai capezzoli durante l\'allattamento hanno implicazioni dirette sulla pervietà dei dotti galattofori, sull\'attacco del neonato e sul rischio di mastite. Gli altri piercing seguono le comuni regole di guarigione.',
  'piercing.breastfeeding.c1': 'Un piercing al capezzolo recente o in guarigione crea un canale aperto vicino ai dotti lattiferi, aumentando il rischio di infezioni canalari, mastiti e ascessi.',
  'piercing.breastfeeding.c2': 'Mantenere il gioiello inserito durante la poppata presenta un pericolo di soffocamento e inalazione per il bambino e ostacola la corretta suzione.',
  'piercing.breastfeeding.c3': 'Per i piercing in altre sedi, la salute generale materna e l\'evitamento di infezioni che richiedano farmaci incompatibili con l\'allattamento sono i punti cardine.',
  'piercing.breastfeeding.q1': 'Quali sono i rischi specifici di mastite o ostruzione dei dotti in caso di piercing ai capezzoli durante l\'allattamento?',
  'piercing.breastfeeding.q2': 'Se eseguo un piercing in una zona diversa dai capezzoli, quali detergenti antisettici e antibiotici sono compatibili con l\'allattamento?',
  'piercing.breastfeeding.source': 'Linee guida OMS sull\'alimentazione infantile e la salute materna; indicazioni NHS sull\'allattamento.',

  // Earlobe: Trying to Conceive
  'earlobe.trying.summary': 'Il foro al lobo presenta una vascolarizzazione modesta e una superficie di ferita molto circoscritta. Tecnica sterile accurata, sterilizzazione in autoclave e gioielli di partenza biocompatibili rappresentano i requisiti basilari.',
  'earlobe.trying.c1': 'Il tessuto del lobo guarisce con relativa rapidità (in genere 6–8 settimane) rispetto alla cartilagine o ad altri distretti corporei.',
  'earlobe.trying.c2': 'La detersione con soluzione fisiologica sterile previene colonizzazioni batteriche superficiali.',
  'earlobe.trying.c3': 'Materiali biocompatibili evitano la sensibilizzazione al nichel e le dermatiti da contatto allergiche.',
  'earlobe.trying.q1': 'Ci sono precauzioni di salute generali da osservare per procedure cutanee minori mentre si programma una gravidanza?',
  'earlobe.trying.q2': 'La normale soluzione salina sterile rappresenta il trattamento consigliato per la guarigione del lobo?',
  'earlobe.trying.source': 'Ragionamento clinico generale - profilo di rischio procedurale minimo.',

  // Earlobe: First Trimester
  'earlobe.first.summary': 'Sebbene il foro al lobo comporti un rischio sistemico assai ridotto, ogni procedura cutanea opzionale nel primo trimestre richiede cautela in merito alla prevenzione infettiva e alla cura quotidiana.',
  'earlobe.first.c1': 'Il tessuto del lobo causa raramente complicanze sistemiche, ma evitare esposizioni batteriche superflue durante l\'organogenesi risponde a una prudenza clinica di base.',
  'earlobe.first.c2': 'La stanchezza del primo trimestre o le nausee possono portare a trascurare la pulizia salina quotidiana.',
  'earlobe.first.c3': 'Scegli uno studio professionale che impieghi aghi monouso sterili e strumenti autoclavati anziché pistole foralobi meccaniche.',
  'earlobe.first.q1': 'Un piccolo foro al lobo è ammissibile durante il primo trimestre, purché venga seguito un rigoroso protocollo sterile?',
  'earlobe.first.q2': 'Cosa devo fare se il lobo diventa caldo, arrossato o dolente al tatto?',
  'earlobe.first.source': 'Ragionamento clinico generale - profilo a basso rischio con prudenza nel primo trimestre.',

  // Earlobe: Second Trimester
  'earlobe.second.summary': 'Il foro al lobo nel secondo trimestre presenta rischi clinici limitati se effettuato in uno studio qualificato con strumenti sterili e materiali biocompatibili di alta purezza.',
  'earlobe.second.c1': 'Il secondo trimestre è generalmente la fase di maggior benessere fisico e stabilità immunitaria della gravidanza.',
  'earlobe.second.c2': 'Due detersioni giornaliere con soluzione fisiologica rappresentano la prassi standard per prevenire colonizzazioni batteriche superficiali.',
  'earlobe.second.c3': 'I materiali biocompatibili prevengono l\'insorgenza di reazioni allergiche locali.',
  'earlobe.second.q1': 'Vi sono obiezioni cliniche all\'esecuzione di un foro al lobo in questa fase della mia gravidanza?',
  'earlobe.second.q2': 'Quali materiali specifici mi consiglia per evitare dermatiti allergiche da contatto?',
  'earlobe.second.source': 'Ragionamento clinico generale - prassi clinica consolidata per interventi locali minori.',

  // Earlobe: Third Trimester
  'earlobe.third.summary': 'I fori ai lobi nel terzo trimestre hanno un basso rischio sistemico, ma è opportuno informarsi in anticipo sulle regole del reparto maternità relative ai gioielli durante il parto.',
  'earlobe.third.c1': 'Se il parto si verifica prima delle 6–8 settimane necessarie alla guarigione, l\'obbligo ospedaliero di togliere i gioielli rischia di far chiudere il foro fresco.',
  'earlobe.third.c2': 'Le norme di sicurezza per l\'elettrochirurgia in caso di parto cesareo impongono la rimozione di tutti i corpi metallici conduttori.',
  'earlobe.third.q1': 'Mi verrà richiesto di rimuovere gli orecchini appena fatti durante travaglio, parto o in sala operatoria?',
  'earlobe.third.q2': 'In caso di taglio cesareo imprevisto, sono consentiti piccoli perni non metallici o bisogna togliere ogni cosa?',
  'earlobe.third.source': 'Politiche ospedaliere NHS sui gioielli nei reparti di degenza e maternità.',

  // Earlobe: Breastfeeding
  'earlobe.breastfeeding.summary': 'Il foro al lobo durante l\'allattamento comporta rischi sistemici o legati alla lattazione trascurabili. L\'igiene ordinaria e l\'attenzione nei movimenti vicino al bambino sono gli aspetti essenziali.',
  'earlobe.breastfeeding.c1': 'La guarigione del lobo non influisce sulla produzione di latte, sull\'anatomia del seno o sulla sicurezza dell\'allattamento.',
  'earlobe.breastfeeding.c2': 'Con la crescita del bambino, il pericolo che afferri o tiri gli orecchini diventa concreto; è consigliabile indossare perni piccoli e discreti.',
  'earlobe.breastfeeding.c3': 'Usa normale soluzione salina sterile due volte al giorno fino alla completa maturazione del tragitto.',
  'earlobe.breastfeeding.q1': 'Ci sono controindicazioni di qualsiasi tipo tra il piercing al lobo e l\'allattamento al seno?',
  'earlobe.breastfeeding.q2': 'Quali cure quotidiane sicure per il contatto con il neonato mi consiglia?',
  'earlobe.breastfeeding.source': 'Ragionamento clinico generale - profilo di rischio sistemico trascurabile.',

  // PMU: Trying to Conceive
  'pmu.trying.summary': 'Il trucco permanente unisce l\'inserimento di pigmenti intradermici all\'applicazione di anestetici topici (come la lidocaina). È consigliabile valutarne i tempi prima di avviare il concepimento.',
  'pmu.trying.c1': 'Gli anestetici topici applicati sulla cute lesa vengono assorbiti nella circolazione sistemica materna.',
  'pmu.trying.c2': 'I pigmenti formulati secondo il Regolamento (UE) 2020/2081 escludono composti pericolosi, ma mancano studi di farmacocinetica fetale sugli inchiostri per microblading.',
  'pmu.trying.c3': 'La programmazione del ritocco (solitamente a distanza di 6–8 settimane) deve considerare un\'eventuale insorgenza della gravidanza.',
  'pmu.trying.q1': 'Quanto tempo prima di iniziare a cercare una gravidanza dovrei completare i trattamenti di trucco permanente che prevedono lidocaina topica?',
  'pmu.trying.q2': 'Quali rischi comporta la seduta di ritocco necessaria se dovessi rimanere incinta tra un appuntamento e l\'altro?',
  'pmu.trying.source': 'Linee guida ACOG sulle procedure dermatologiche ed estetiche; Regolamento (UE) 2020/2081.',

  // PMU: First Trimester
  'pmu.first.summary': 'Il trucco permanente nel primo trimestre comporta sia l\'esposizione dermica ai pigmenti sia l\'assorbimento di anestetici topici durante il periodo vulnerabile dell\'organogenesi.',
  'pmu.first.c1': 'Gli anestetici locali topici (lidocaina, prilocaina, tetracaina) vengono assorbiti a livello sistemico; il loro impiego per fini estetici durante l\'organogenesi viene evitato per prudenza.',
  'pmu.first.c2': 'Le variazioni ormonali del primo trimestre possono alterare la produzione di sebo, rendendo disomogenea la tenuta e la guarigione del pigmento.',
  'pmu.first.c3': 'Gli operatori professionisti di PMU non eseguono trattamenti nel primo trimestre; concorda le tempistiche con il tuo medico.',
  'pmu.first.q1': 'Quali sono le raccomandazioni cliniche riguardanti gli anestetici locali in crema (lidocaina/EMLA) nel corso del primo trimestre?',
  'pmu.first.q2': 'In che modo gli ormoni della gravidanza iniziale influenzano la cicatrizzazione cutanea e il rischio di iperpigmentazione post-trattamento?',
  'pmu.first.source': 'Parere del comitato ACOG sulle procedure estetiche elettive; linee guida cliniche RCOG.',

  // PMU: Second Trimester
  'pmu.second.summary': 'Nel secondo trimestre, l\'assorbimento dell\'anestetico locale e le alterazioni della pigmentazione cutanea (cloasma / maschera gravidica) sono argomenti centrali di consultazione.',
  'pmu.second.c1': 'Gli ormoni gravidici stimolano i melanociti; il microblading o il trucco labbra possono guarire con colorazioni anomale, macchie o iperpigmentazione post-infiammatoria.',
  'pmu.second.c2': 'Le preparazioni anestetiche topiche richiedono sempre il preventivo nulla osta del team ostetrico.',
  'pmu.second.c3': 'La maggiore vascolarizzazione del volto può accentuare il microsanguinamento durante l\'incisione, espellendo parte del pigmento.',
  'pmu.second.q1': 'L\'iperpigmentazione della gravidanza (melasma) potrebbe rendere la guarigione del trucco permanente disomogenea o a macchie?',
  'pmu.second.q2': 'Il vostro centro approva l\'uso di lidocaina topica per trattamenti estetici al viso durante il secondo trimestre?',
  'pmu.second.source': 'Ragionamento clinico generale; linee guida della British Association of Dermatologists sulla medicina estetica in gravidanza.',

  // PMU: Third Trimester
  'pmu.third.summary': 'Nel terzo trimestre i trattamenti di PMU vengono di norma rimandati per via dell\'anestesia locale, degli edemi facciali e della posizione prolungata.',
  'pmu.third.c1': 'Il gonfiore e la ritenzione idrica al volto possono alterare la naturale simmetria di sopracciglia o labbra, causando asimmetrie una volta riassorbiti gli edemi post-parto.',
  'pmu.third.c2': 'Rimanere distesa sulla poltrona per oltre 2 ore può comprimere la vena cava, provocando cali pressori e vertigini.',
  'pmu.third.c3': 'Evitare lesioni cutanee elettive e rischi infettivi a ridosso del parto costituisce una consolidata norma di prudenza ostetrica.',
  'pmu.third.q1': 'In quale misura i gonfiori del viso in prossimità del parto possono compromettere la precisione del trucco permanente?',
  'pmu.third.q2': 'In caso di reazione allergica o infiammatoria inattesa vicino alla data del parto, quali terapie si possono assumere in sicurezza?',
  'pmu.third.source': 'Ragionamento clinico generale - differimento delle procedure estetiche elettive a fine gestazione.',

  // PMU: Breastfeeding
  'pmu.breastfeeding.summary': 'Il trucco permanente durante l\'allattamento si focalizza sul possibile passaggio dell\'anestetico topico nel latte materno e sulla prevenzione delle infezioni cutanee.',
  'pmu.breastfeeding.c1': 'La lidocaina applicata localmente ha un basso assorbimento sistemico, ma minime tracce possono passare nel latte; è consigliabile concordare gli orari delle poppate con l\'ostetrica.',
  'pmu.breastfeeding.c2': 'Le particelle di inchiostro restano confinate nel derma e nei linfonodi regionali, senza alcun riscontro di passaggio nel latte.',
  'pmu.breastfeeding.c3': 'La carenza di riposo e l\'assestamento ormonale possono rallentare la riepitelizzazione superficiale delle arcate sopraccigliari.',
  'pmu.breastfeeding.q1': 'Quanto tempo dopo l\'applicazione di crema a base di lidocaina per sopracciglia o labbra posso allattare il mio bambino?',
  'pmu.breastfeeding.q2': 'Quali detergenti disinfettanti e pomate lenitive sono sicuri per il contatto con il neonato durante la guarigione?',
  'pmu.breastfeeding.source': 'Linee guida NHS sugli anestetici topici e l\'allattamento; ragionamento clinico generale.',

  // Laser Removal: Trying to Conceive
  'removal.trying.summary': 'La rimozione laser frantuma l\'inchiostro in residui microscopici che vengono smaltiti dai macrofagi, dal sistema linfatico e dai reni. Valuta la sequenza delle sedute rispetto al concepimento.',
  'removal.trying.c1': 'La frammentazione genera un rilascio sistemico di prodotti di degradazione del pigmento e mediatori infiammatori per diverse settimane post-trattamento.',
  'removal.trying.c2': 'Il destino farmacologico e il potenziale passaggio transplacentare di queste nanoparticole durante le prime fasi del concepimento non sono documentati da studi clinici.',
  'removal.trying.c3': 'Le cliniche suggeriscono abitualmente di concludere i cicli di laser o programmare una pausa prima di avviare la ricerca di un figlio.',
  'removal.trying.q1': 'Quanto tempo occorre all\'organismo per smaltire i prodotti di degradazione del pigmento dopo una seduta laser?',
  'removal.trying.q2': 'Ritiene opportuno sospendere le sedute di rimozione laser mentre stiamo cercando attivamente una gravidanza?',
  'removal.trying.source': 'Linee guida sul laser della British Association of Dermatologists; ragionamento clinico generale.',

  // Laser Removal: First Trimester
  'removal.first.summary': 'La rimozione laser nel primo trimestre introduce nanoparticelle di inchiostro in circolo e provoca un intenso stress termico e infiammatorio durante l\'organogenesi.',
  'removal.first.c1': 'La fototermolisi laser polverizza i pigmenti chimici in frammenti sub-micronici che entrano nel circolo linfatico e sistemico.',
  'removal.first.c2': 'La sicurezza fetale delle nanoparticelle di pigmento circolanti nelle settimane 1–12 (organogenesi) non è stata dimostrata dalla ricerca clinica.',
  'removal.first.c3': 'L\'uso di dosi elevate di anestetici topici o infiltrativi, frequente nelle sedute laser, costituisce un\'inutile esposizione farmacologica per il feto.',
  'removal.first.c4': 'I dermatologi e i centri laser rimandano sistematicamente la rimozione a dopo la gravidanza; valuta le tempistiche con il tuo specialista.',
  'removal.first.q1': 'Per quali motivi clinici i dermatologi rinviano la rimozione laser dei tatuaggi durante il primo trimestre?',
  'removal.first.q2': 'Se ho effettuato una seduta laser prima di sapere di essere incinta, quali aspetti dobbiamo monitorare alla prossima visita?',
  'removal.first.source': 'Linee guida ACOG sui dispositivi laser ed estetici in gravidanza; consenso di farmacologia clinica.',

  // Laser Removal: Second Trimester
  'removal.second.summary': 'La rimozione laser nel secondo trimestre rimane un tema prioritario da approfondire con il medico, persistendo i rischi legati allo smaltimento delle particelle e all\'iperpigmentazione cutanea.',
  'removal.second.c1': 'La maggiore attività melanocitaria in gravidanza accresce notevolmente il rischio di iperpigmentazione post-infiammatoria o di ipopigmentazione permanente nelle aree trattate.',
  'removal.second.c2': 'Il carico di smaltimento linfatico dei pigmenti frammentati rimane attivo per 6–8 settimane dopo ciascuna applicazione laser.',
  'removal.second.c3': 'Rinviare ulteriori sedute a dopo il parto è l\'indicazione prevalente tra gli specialisti del laser e i ginecologi.',
  'removal.second.q1': 'La maggiore pigmentazione cutanea dovuta alla gravidanza aumenta il rischio di cicatrici o macchie causate dal laser?',
  'removal.second.q2': 'È sicuro lasciare il tatuaggio parzialmente cancellato fino al periodo successivo al parto?',
  'removal.second.source': 'British Association of Dermatologists; ragionamento clinico generale.',

  // Laser Removal: Third Trimester
  'removal.third.summary': 'La rimozione laser in gravidanza avanzata aggiunge stress fisiologico, infiammazione e potenziali complicanze cutanee a ridosso del parto.',
  'removal.third.c1': 'Vescicole, ustioni superficiali e rischi di infezione legati a sedute laser intense causano un disagio materno non necessario a ridosso del termine.',
  'removal.third.c2': 'La risposta infiammatoria sistemica può elevare la temperatura corporea e accelerare il battito cardiaco materno.',
  'removal.third.c3': 'La postura e la mobilità richieste durante il trattamento risultano fortemente compromesse nel terzo trimestre.',
  'removal.third.q1': 'Quali complicazioni comporterebbe un\'ustione o una vescica da laser se il travaglio dovesse iniziare inaspettatamente?',
  'removal.third.q2': 'A quale distanza dal parto viene solitamente considerato opportuno riprendere i trattamenti laser?',
  'removal.third.source': 'Ragionamento clinico generale - differimento dei trattamenti laser non urgenti in gravidanza avanzata.',

  // Laser Removal: Breastfeeding
  'removal.breastfeeding.summary': 'Durante l\'allattamento, le nanoparticelle di pigmento frammentate dai macrofagi entrano nel circuito linfatico. Il passaggio di tracce chimiche o metaboliti nel latte materno non è stato chiarito.',
  'removal.breastfeeding.c1': 'Gli studi sul passaggio nel latte materno delle particelle d\'inchiostro liberate dal laser sono molto scarsi; per questo di solito si consiglia prudenza.',
  'removal.breastfeeding.c2': 'I trattamenti laser richiedono spesso anestetici topici potenti che necessitano di cautela attorno ai momenti di allattamento.',
  'removal.breastfeeding.c3': 'Posticipare le sedute laser a dopo lo svezzamento annulla ogni dubbio di esposizione a sostanze chimiche per il neonato.',
  'removal.breastfeeding.q1': 'I frammenti di inchiostro polverizzati dal laser possono passare nel mio latte materno?',
  'removal.breastfeeding.q2': 'Mi consiglia di attendere che il bambino sia svezzato prima di riprendere le sedute di rimozione laser del tatuaggio?',
  'removal.breastfeeding.source': 'Linee guida cliniche RCOG e NHS su farmaci e procedure in allattamento; ragionamento clinico generale.'
,

  // Additional Improvements (Features 1-7)
  'nav.mode_reference': 'Riferimento singola procedura',
  'nav.mode_compare': 'Matrice comparativa procedure',
  'nav.mode_hospital': 'Protocollo ospedale e parto',
  'nav.mode_navel': 'Guida espansione tessutale ombelicale',
  'nav.mode_nipple': 'Guida capezzolo e allattamento',
  'nav.mode_postpartum': 'Cronologia di ripresa post-parto',
  'nav.mode_triage': 'Triage delle complicanze',
  'worksheet.custom_notes_title': 'Appunti personali e argomenti di discussione',
  'worksheet.custom_notes_desc': 'Aggiungi domande personali, la cronologia dei tuoi piercing o argomenti specifici da discutere con il tuo medico o ostetrica prima di stampare:',
  'worksheet.custom_notes_placeholder': 'Scrivi qui le tue domande o appunti (es.: "Chiedere del piercing all\'ombelico durante il parto", "Segnalare cesareo programmato alla 39a settimana")...',
  'worksheet.print_client_notes_title': 'Note della paziente e quesiti specifici da discutere:',
  'compare.title': 'Matrice comparativa affiancata delle procedure',
  'compare.subtitle': 'Seleziona due o tre combinazioni di procedura e periodo per confrontare direttamente livelli di priorità, razionale fisiologico e punti di discussione clinica.',
  'compare.col_heading': 'Scenario {num}',
  'compare.select_proc': 'Seleziona procedura',
  'compare.select_stage': 'Seleziona periodo',
  'compare.clear_btn': 'Reimposta matrice',
  'compare.prompt': 'Seleziona una procedura e un periodo per almeno due colonne per visualizzare il confronto clinico affiancato.',
  'compare.priority_label': 'Priorità di dialogo',
  'compare.rationale_label': 'Razionale clinico',
  'compare.considerations_label': 'Fattori fisiologici chiave',
  'compare.source_label': 'Evidenze di riferimento',
  'hospital.title': 'Pianificatore protocolli gioielli in ospedale e sala parto',
  'hospital.subtitle': 'Checklist strutturata da verificare alla visita prenatale della 36a settimana in merito a elettrocauterio, parto d\'emergenza e contatto neonatale.',
  'hospital.intro': 'I regolamenti ospedalieri sui gioielli durante travaglio e parto variano in base alla struttura, ai protocolli chirurgici e alle linee guida locali. Esamina questi punti con l\'ostetrica o il ginecologo prima della 36a settimana.',
  'hospital.item1_title': 'Apparecchiature per elettrocauterio e diatermia monopolare',
  'hospital.item1_desc': 'In caso di taglio cesareo urgente o non programmato, l\'elettrobisturi monopolare crea un circuito elettrico attraverso il corpo. Gioielli metallici conduttivi possono comportare un rischio di ustione termica se interposti tra il sito chirurgico e la piastra di dispersione a terra.',
  'hospital.item2_title': 'Vie aeree d\'emergenza e gestione anestesiologica',
  'hospital.item2_desc': 'Piercing a labbra, lingua, bocca e naso presentano rischi di ostruzione o dislocazione durante intubazione d\'urgenza o ventilazione con maschera qualora si renda necessaria un\'anestesia generale.',
  'hospital.item3_title': 'Gioielli pelvici, genitali e perineali',
  'hospital.item3_desc': 'Piercing genitali e perineali comportano rischi immediati di lacerazione tissutale durante il parto vaginale e ostacolano l\'esecuzione di episiotomie o suture perineali. Le sale parto richiedono la rimozione prima del travaglio attivo.',
  'hospital.item4_title': 'Contatto cutaneo neonatale e manipolazione',
  'hospital.item4_desc': 'Gioielli su viso, collo, polsi o torace possono provocare abrasioni accidentali sulla cute delicata del neonato durante il contatto pelle a pelle immediato e le prime poppate.',
  'hospital.item5_title': 'Risonanza magnetica nucleare diagnostica (RMN)',
  'hospital.item5_desc': 'Se fosse indicata una diagnostica per immagini urgente dopo il parto, elementi metallici ferromagnetici presentano pericoli di effetto proiettile, torsione e surriscaldamento da radiofrequenza.',
  'hospital.action_title': 'Punti pratici per il colloquio della 36a settimana',
  'hospital.action1': 'Chiedi all\'ostetrica le regole specifiche della sala parto e del blocco operatorio del tuo presidio di nascita.',
  'hospital.action2': 'Verifica se sia possibile annotare sulla cartella clinica l\'uso di retainer inerti non metallici nei siti non interessati da chirurgia.',
  'hospital.action3': 'Pianifica la rimozione di tutti i gioielli orali, facciali, genitali e addominali prima della data presunta del parto, rivolgendoti a un piercer per chiusure serrate.',
  'hospital.product_note_title': 'Nota prodotto: Retainer inerti non metallici',
  'hospital.product_note_body': 'I retainer non conduttivi e non metallici in copolimero random PP-R o in altri polimeri non conduttivi di grado implantare non conducono corrente elettrica e non sono ferromagnetici. Vengono spesso usati per mantenere aperto un canale già formato quando il regolamento ospedaliero ammette retainer non metallici. Le decisioni su sala operatoria e anestesia restano di competenza del personale clinico e chirurgico presente, che ha l\'ultima parola su qualsiasi corpo estraneo.',
  'navel.title': 'Guida visiva all\'espansione tissutale dell\'ombelico',
  'navel.subtitle': 'Modelli educativi di sollecitazione meccanica che illustrano la distensione della parete addominale, le forze di taglio e la deformazione del canale nei trimestri.',
  'navel.intro': 'Con l\'accrescimento uterino che distende la parete addominale anteriore, il canale ombelicale subisce importanti tensioni direzionali. Questa guida illustra come cambiano le sollecitazioni anatomiche.',
  'navel.t1_title': 'Pre-concepimento / Primo trimestre: Geometria a riposo',
  'navel.t1_desc': 'Spessore tissutale regolare con tensione minima. Il canale del piercing alloggia verticalmente nel tessuto adiposo sottocutaneo senza alterazioni della parete addominale.',
  'navel.t2_title': 'Secondo trimestre: Espansione laterale e longitudinale',
  'navel.t2_desc': 'L\'espansione uterina appiana la concavità ombelicale. La cute affronta trazioni longitudinali e trasversali continue, generando attriti contro le estremità rigide del gioiello.',
  'navel.t3_title': 'Terzo trimestre: Torsione meccanica severa ed eversione',
  'navel.t3_desc': 'La massima distensione può causare l\'eversione dell\'ombelico (estroflessione). La pressione dermica assottiglia la pelle sopra la barra rigida, aumentando il rischio di rigetto, strappo o cicatrici permanenti.',
  'navel.stress_points_title': 'Punti chiave di tensione meccanica da discutere con il medico',
  'navel.stress_p1': 'L\'assottigliamento della cute tra i fori indica una tensione eccessiva che richiede la rimozione del gioiello per evitare la lacerazione del canale.',
  'navel.stress_p2': 'Barrette curve rigide in metallo non possono flettersi per assecondare la curvatura addominale, inducendo decubiti da compressione sotto le sfere terminali.',
  'navel.stress_p3': 'L\'appiattimento dell\'ombelico elimina la protezione naturale della cavità, esponendo il gioiello a sfregamenti diretti con fasce elastiche e abiti premaman.',
  'navel.sizing_link_prefix': 'Per consultare le dimensioni tecniche dei gioielli, le conversioni di calibro e le lunghezze delle barre, fai riferimento al',
  'navel.sizing_link_text': 'Visualizzatore misure gioielli',
  'navel.sizing_link_suffix': '. Non eseguire modifiche o cambi di calibro non guidati durante la gestazione; concorda qualunque variazione con il tuo piercer professionista e l\'ostetrica.',
  'navel.product_note_title': 'Nota prodotto: Retainer ombelicali flessibili',
  'navel.product_note_body': 'Patrick Poli, creatore dei gioielli BioFlex®, ha scelto per essi un copolimero random PP-R flessibile perché si pieghino lungo i profili anatomici che cambiano senza creare punti di pressione rigidi. Il PP-R è stampato a iniezione in un unico pezzo monolitico; non è PTFE (che viene lavorato da barre estruse e tende a perdere orientamento). Se la tensione provoca arrossamento, dolore o assottigliamento all\'ombelico, rimuovi il gioiello tempestivamente, indipendentemente dal materiale.',
  'nipple.title': 'Guida piercing al capezzolo e allattamento',
  'nipple.subtitle': 'Indicazioni sulla meccanica dell\'allattamento, la rimozione del gioiello prima di ogni poppata, la sicurezza respiratoria del neonato e quando rivolgersi a una professionista dell\'allattamento.',
  'nipple.intro': 'I piercing ai capezzoli richiedono una preparazione attenta durante la gravidanza e l\'allattamento per preservare l\'alimentazione del bambino ed evitare complicanze.',
  'nipple.choking_title': 'Sicurezza respiratoria neonatale: rimuovere i gioielli prima di ogni poppata o estrazione',
  'nipple.choking_desc': 'Qualsiasi gioiello, sfera o retainer lasciato sul capezzolo rappresenta un pericolo immediato di soffocamento, aspirazione nelle vie aeree e ostruzione respiratoria per il neonato durante la poppata o l\'uso del tiralatte. Il gioiello deve essere completamente rimosso prima dell\'attacco al seno.',
  'nipple.mech_title': 'Fisiologia della lattazione e flusso del latte',
  'nipple.mech_desc': 'Il capezzolo umano presenta tra 4 e 18 dotti galattofori individuali. I canali di piercing formati attraversano o affiancano questi dotti. Durante la calata, il latte può fuoriuscire sia dai pori naturali sia dagli orifizi del piercing.',
  'nipple.latch_title': 'Efficacia dell\'attacco ed elasticità dei tessuti',
  'nipple.latch_desc': 'Il tessuto cicatriziale residuo può ridurre l\'elasticità e l\'estensione del capezzolo quando il neonato lo ritrae verso il palato molle, provocando talvolta fastidio materno o un attacco superficiale.',
  'nipple.consult_title': 'Consulenza con ostetrica o esperta in allattamento',
  'nipple.consult_desc': 'Evita di effettuare autovalutazioni sulla pervietà dei dotti o sulla densità cicatriziale. In presenza di ingorghi localizzati, dolore o difficoltà di attacco, programma una visita di persona con una consulente per l\'allattamento certificata IBCLC o la tua ostetrica.',
  'nipple.infection_title': 'Rischio di mastite e reinserimento frequente',
  'nipple.infection_desc': 'Inserire e togliere ripetutamente il gioiello in un canale irritato tra una poppata e l\'altra veicola la flora cutanea direttamente nei seni galattofori, incrementando il rischio di mastite infettiva.',
  'postpartum.title': 'Cronologia didattica di ripresa post-parto',
  'postpartum.subtitle': 'Tappe fisiologiche su guarigione dei tessuti, recupero immunitario, riassetto emodinamico e stabilizzazione ormonale prima di nuovi trattamenti estetici.',
  'postpartum.intro': 'La ripresa di procedure elettive sul corpo dopo il parto dipende da complessi traguardi fisiologici e non da una rigida scadenza temporale. Esamina queste fasi con il tuo medico o ostetrica al controllo post-parto.',
  'postpartum.p1_title': 'Settimane 0–6: Puerperio immediato e recupero emodinamico',
  'postpartum.p1_desc': 'Involuzione uterina, lochiazioni, cicatrizzazione della sede placentare e marcate variazioni del volume ematico impegnano l\'organismo. Il sistema immunitario si riorganizza dopo la modulazione gravidica; traumi dermici elettivi sono sconsigliati.',
  'postpartum.p2_title': 'Settimane 6–12: Visita post-parto e consolidamento dei tessuti',
  'postpartum.p2_desc': 'Dopo la visita di controllo a 6 settimane, le ferite perineali o da taglio cesareo appaiono consolidate. Tuttavia, stanchezza, ritmi di sonno frammentati e avvio dell\'allattamento continuano a influenzare le difese sistemiche.',
  'postpartum.p3_title': 'Mesi 3–6: Assestamento ormonale e rimodellamento tissutale',
  'postpartum.p3_desc': 'La lassità dei tessuti connettivi correlata alla relaxina diminuisce gradualmente. Per chi non allatta, la barriera cutanea, la reattività vascolare e i parametri immunitari ritornano su livelli basali.',
  'postpartum.p4_title': 'Periodo di allattamento fino allo svezzamento: Valutazioni costanti',
  'postpartum.p4_desc': 'Durante l\'allattamento attivo, livelli sostenuti di prolattina mantengono l\'amenorrea ovulatoria e modificano l\'idratazione cutanea. Rimozione laser e pigmenti cosmetici richiedono prudenza a tutela del lattante.',
  'postpartum.closing_title': 'Consiglio sui tempi clinici',
  'postpartum.closing_desc': 'I tempi di recupero variano sensibilmente a seconda del tipo di parto, perdite ematiche, riserve nutrizionali e gestione delle poppate. Discuti sempre le tempistiche con il tuo ginecologo, medico curante o ostetrica prima di prenotare.',
  'triage.title': 'Riferimento di triage delle complicanze per piercing e tatuaggi esistenti',
  'triage.subtitle': 'Distinzione clinica tra irritazione meccanica da stiramento cutaneo e manifestazioni che richiedono una pronta visita medica.',
  'triage.intro': 'Questo prospetto aiuta a distinguere tensioni fisiche lievi da infezioni cliniche localizzate o sistemiche. Lo strumento non emette diagnosi o nulla osta medici; ogni sintomo richiede una valutazione professionale.',
  'triage.cat_mechanical': 'Irritazione meccanica (tensione fisica localizzata)',
  'triage.cat_medical': 'Sintomi che richiedono una visita medica urgente',
  'triage.mech_sym1': 'Lieve eritema (rossore) confinato rigorosamente attorno ai fori di entrata e uscita, senza calore diffuso.',
  'triage.mech_sym2': 'Assenza di febbre, brividi, dolori muscolari o malessere generale.',
  'triage.mech_sym3': 'Secrezione linfatica sierosa chiara o color paglierino che essicca in crosticine, priva di odore sgradevole.',
  'triage.mech_sym4': 'Fastidio che scompare non appena si allenta la pressione degli abiti, degli elastici o del gioiello rigido.',
  'triage.mech_action': 'Azione: Allentare indumenti stretti, non toccare con mani non lavate e consultare il piercer per adattare la misura del gioiello. Se i disturbi persistono, contatta l\'ostetrica o il medico.',
  'triage.med_sym1': 'Eritema esteso, caldo e pulsante che deborda oltre i confini del piercing o del tatuaggio.',
  'triage.med_sym2': 'Segni sistemici quali febbre corporea (>38 °C), brividi scuotenti, tachicardia o spossatezza marcata.',
  'triage.med_sym3': 'Secrezione purulenta densa, opaca, gialla o verdastra, accompagnata da odore acre o fétido.',
  'triage.med_sym4': 'Strie rosse lineari (linfangite) che si estendono dalla lesione verso le stazioni linfonodali regionali.',
  'triage.med_sym5': 'Cute visibilmente assottigliata con rischio imminente di lacerazione del canale o espulsione del gioiello.',
  'triage.med_action': 'Azione: Richiedi tempestivamente una visita medica presso il ginecologo, medico di base, ostetrica o pronto soccorso. Non attendere un parere in studio.'
};

const I18N_DE = {
  // Search Bar & Filter Strings
  'search.placeholder': 'Klinische Richtlinien, Themen oder Materialien suchen (z. B. Piercing, Nabel, Mastitis)...',
  'search.clear_btn': 'Suche löschen',
  'search.filter_all': 'Alle Themen',
  'search.filter_procedures': 'Eingriffe',
  'search.filter_guidelines': 'Fachrichtlinien',
  'search.results_count': '{count} klinische(s) Thema/Themen gefunden für „{query}“',
  'search.no_results_title': 'Keine klinischen Themen gefunden',
  'search.no_results_desc': 'Versuchen Sie es mit Eingriffsarten (Tattoo, Piercing, Permanent-Make-up), Phasen (erstes Trimester, Stillzeit) oder spezifischen Anliegen (Nabelspannung, Atemwege des Säuglings, Mastitis, Infektionszeichen).',
  'search.item_category_procedure': 'Sicherheitsreferenz für Eingriffe',
  'search.item_category_guideline': 'Fachrichtlinien und klinische Themen',
  'search.view_action': 'Thema anzeigen',

  // Page Metadata
  'meta.title': 'Sicherheitsleitfaden für Eingriffe in Schwangerschaft und Stillzeit | Poli International',
  'meta.description': 'Klinisch fundierte Grundlage für das Gespräch mit Ihrer Ärztin, Ihrem Arzt oder Ihrer Hebamme über Tattoos, Piercings und Permanent Make-up während Schwangerschaft und Stillzeit.',

  // Header & Navigation
  'app.badge': 'Klinische & Studio-Referenz',
  'app.title': 'Sicherheit von Eingriffen: Schwangerschaft & Stillzeit',
  'app.subtitle': 'Eine klinisch fundierte Diskussionsgrundlage für das Gespräch mit Ihrer Ärztin, Ihrem Arzt oder Ihrer Hebamme über Tätowierungen, Piercings und Permanent Make-up.',
  'app.lang_label': 'Sprache:',

  // Language Dropdown Options
  'lang.en': 'Englisch',
  'lang.de': 'Deutsch',
  'lang.fr': 'Französisch',
  'lang.es': 'Spanisch',
  'lang.it': 'Italienisch',
  'lang.nl': 'Niederländisch',
  'lang.pt': 'Portugiesisch',

  // Form Controls
  'form.procedure_label': 'Art des Eingriffs',
  'form.stage_label': 'Aktuelle Phase',
  'form.procedure_placeholder': '- Eingriff auswählen -',
  'form.stage_placeholder': '- Phase auswählen -',

  // Procedures
  'proc.tattoo': 'Neues Tattoo',
  'proc.piercing': 'Körperpiercing (außer Ohr)',
  'proc.earlobe': 'Ohrläppchen-Piercing',
  'proc.pmu': 'Permanent Make-up / Microblading',
  'proc.removal': 'Laser-Tattooentfernung',

  // Stages
  'stage.trying': 'Kinderwunsch (präkonzeptionelle Phase)',
  'stage.first': 'Erstes Trimester (Wochen 1–12)',
  'stage.second': 'Zweites Trimester (Wochen 13–26)',
  'stage.third': 'Drittes Trimester (Wochen 27–40)',
  'stage.breastfeeding': 'Stillzeit / Wochenbett',

  // Prompt / Empty State
  'prompt.title': 'Wählen Sie einen Eingriff und eine Phase aus',
  'prompt.body': 'Wählen Sie oben eine Body-Art-Prozedur und Ihre Schwangerschafts- oder Stillphase aus, um maßgeschneiderte klinische Diskussionspunkte und eine druckbare Fragen-Checkliste anzuzeigen.',

  // Priority Tier Headings
  'tier1.tag': 'Prioritätsstufe 1: Frühzeitige Besprechung',
  'tier1.title': 'Hohe Priorität: Dringend mit dem Behandlungsteam abzuklären',
  'tier1.sub': 'Aktive physiologische Anpassungen, Embryonalentwicklung oder Gewebedehnung erfordern eine frühzeitige klinische Rücksprache vor einer Terminvereinbarung.',
  'tier2.tag': 'Prioritätsstufe 2: Geplante Besprechung',
  'tier2.title': 'Geplante Besprechung mit Ihrem Behandlungsteam',
  'tier2.sub': 'Mütterliche physiologische Veränderungen beeinflussen Wundheilung oder Platzierung; sprechen Sie dies bei der nächsten regulären Vorsorgeuntersuchung an.',
  'tier3.tag': 'Prioritätsstufe 3: Routinemäßige Besprechung',
  'tier3.title': 'Routinemäßige Besprechung mit Ihrem Behandlungsteam',
  'tier3.sub': 'Geringe Komplexität des Eingriffs; erwähnen Sie standardmäßige sterile Protokolle und Nachsorge bei Ihrem betreuenden Team.',

  // Section Titles
  'section.summary': 'Klinische Begründung',
  'section.considerations': 'Klinische und physiologische Aspekte',
  'section.checklist': 'Fragen für Ihre Ärztin, Ihren Arzt oder Ihre Hebamme',
  'section.checklist_intro': 'Haken Sie die Fragen ab, die Sie bei Ihrem nächsten Termin mit Ihrer Hebamme, Gynäkologin oder Ihrem Hausarzt besprechen möchten:',
  'section.provenance': 'Herkunft und Evidenzgrundlage',
  'section.authority_title': 'Medizinische Entscheidungskompetenz Ihres Behandlungsteams',
  'section.authority_body': 'Dieses Tool bietet allgemeine klinische Orientierungspunkte. Ihre Ärztin, Ihr Arzt oder Ihre Hebamme kennt Ihre individuelle Krankengeschichte, Laborwerte und den Schwangerschaftsverlauf und trifft alle medizinischen Entscheidungen für Ihre Versorgung.',
  'section.product_note_title': 'Produkthinweis: Materialien für Piercingschmuck',
  'section.sibling_title': 'Verwandte klinische Referenzwerkzeuge',
  'section.print_btn': 'Fragen-Checkliste drucken',
  'section.meta_reviewed': 'Zuletzt überprüft:',
  'section.meta_date': 'September 2026',
  'section.meta_source': 'Grundlage der klinischen Überprüfung:',

  // Provenance Legal Instruments
  'provenance.eu_instrument_prefix': 'Offizieller Rechtsakt:',
  'provenance.eu_instrument_name': 'Verordnung (EU) 2020/2081 der Kommission (REACH-Anhang XVII: Tätowier- und PMU-Farben)',

  // Printout Ruled Area & Header
  'print.doc_title': 'Leitfaden für das ärztliche Beratungsgespräch',
  'print.patient_date': 'Datum:',
  'print.notes_title': 'Notizen zum Beratungsgespräch & Nachsorgeplan',
  'print.patient_copy': 'Patientenexemplar für das Beratungsgespräch',
  'print.clinician_signature': 'Unterschrift Behandler/in: _______________________',
  'print.gestational_age': 'Schwangerschaftswoche / Status: ________________',
  'print.footer_note': 'Dieses Dokument dient der Information und Vorbereitung auf Ihr Beratungsgespräch in Schwangerschaft oder Stillzeit. Es ersetzt keinesfalls die persönliche Untersuchung durch Ihre Ärztin, Ihren Arzt oder Ihre Hebamme.',

  // Product Note Text
  'product_note.body': 'Patrick Poli, Schöpfer von BioFlex® body jewelry, hat dafür ein PP-R (Polypropylen-Random-Copolymer) ausgewählt, damit der Schmuck sich verändernden Körperkonturen folgt. Biegsame Materialien wie BioFlex® body jewelry und Metalle in Implantatqualität sind reaktionsarme Optionen, die Sie in der Schwangerschaft für bestehende oder heilende Piercings mit Ihrem Piercingstudio besprechen können. PP-R wird im Spritzgussverfahren als monolithisches Einzelstück gefertigt; es ist kein PTFE (welches aus extrudierten Stangen zerspant wird). Sprechen Sie bezüglich der Schmuckauswahl stets mit Ihrem Piercingstudio und Ihrer medizinischen Betreuung.',

  // Disclaimer
  'disclaimer.title': 'Wichtiger medizinischer Hinweis:',
  'disclaimer.body': 'Dieses Werkzeug dient ausschließlich Informationszwecken und ersetzt keine persönliche medizinische Beratung, Diagnose oder Behandlung. Besprechen Sie jeden geplanten Body-Art-Eingriff vorab mit Ihrer Hebamme, Gynäkologin oder Ihrem Hausarzt.',

  // Sibling Tools
  'sibling.med_title': 'Prüfung von Medikamentenwechselwirkungen',
  'sibling.med_desc': 'Prüfen Sie Wechselwirkungen zwischen verschreibungspflichtigen Therapien, gängigen Wirkstoffen und Body-Art-Eingriffen.',
  'sibling.migration_title': 'Risiko für Piercing-Migration und Abstoßung',
  'sibling.migration_desc': 'Bewerten Sie mechanische Spannung, Einstichtiefe und anatomische Bewegungseinflüsse auf den Schmucksitz.',

  // Tattoo: Trying to Conceive
  'tattoo.trying.summary': 'Tätowierpigmente gelangen in die Dermis und regionale Lymphknoten. Zwar gibt es keine klinischen Belege für teratogene Wirkungen vor der Empfängnis, jedoch erfordert jede lokale Hautinfektion während der frühen Einnistung eine gezielte geburtshilfliche Begleitung.',
  'tattoo.trying.c1': 'Klinische Studien zur systemischen Zirkulation von Farb-Nanopartikeln während des Empfängnisfensters liegen nur in sehr begrenztem Umfang vor.',
  'tattoo.trying.c2': 'Eine schwere Hautinfektion mit Antibiotikabedarf während der frühen Nidation verlangt eine sorgfältige medikamentöse Wirkstoffauswahl.',
  'tattoo.trying.c3': 'Die Zusammensetzung von Farben variiert; Produkte gemäß Verordnung (EU) 2020/2081 beschränken über 4.000 bedenkliche Stoffe, aromatische Amine und Schwermetalle.',
  'tattoo.trying.c4': 'Eine Terminplanung außerhalb des vermuteten fruchtbaren Fensters ermöglicht den Ausschluss einer Schwangerschaft vor Beginn des Wundheilungsprozesses.',
  'tattoo.trying.q1': 'Könnte die normale Wundheilung nach einem Tattoo die Einnistung oder frühe Embryonalentwicklung beeinträchtigen, falls ich kurz darauf schwanger werde?',
  'tattoo.trying.q2': 'Gibt es bestimmte Antibiotikaklassen, die bei einer Hautinfektion während der Kinderwunschphase strikt gemieden werden müssen?',
  'tattoo.trying.q3': 'Sind mein Tetanusschutz und meine Hepatitis-B-Immunität vor Eingriffen mit Hautverletzung auf dem aktuellen Stand?',
  'tattoo.trying.source': 'Allgemeine klinische Erwägungen - keine eigenständige ACOG- oder RCOG-Leitlinie für die Phase vor der Konzeption.',

  // Tattoo: First Trimester
  'tattoo.first.summary': 'Das erste Trimester (Wochen 1–12) ist das entscheidende Zeitfenster der fetalen Organogenese. Jede mütterliche systemische Infektion, anhaltendes Fieber oder Entzündungskaskaden in dieser Periode haben erhebliche klinische Relevanz.',
  'tattoo.first.c1': 'Die Organogenese vollzieht sich vor allem zwischen der 3. und 8. Schwangerschaftswoche, in der mütterliche physiologische Stabilität vorrangig ist.',
  'tattoo.first.c2': 'Hautverletzende Eingriffe bergen das Grundrisiko bakterieller Inokulationen (Staphylokokken, Streptokokken) und durch Blut übertragbarer Erreger.',
  'tattoo.first.c3': 'Schwangerschaftsübelkeit, Hyperemesis und immunologische Umstellungen im ersten Trimester können die Wundheilung und die tägliche Nachsorgehygiene beeinträchtigen.',
  'tattoo.first.c4': 'Professionelle Tattoo-Studios lehnen das Stechen bei Schwangeren im Rahmen ihres Risikomanagements routinemäßig ab; klären Sie den Zeitpunkt ärztlich ab.',
  'tattoo.first.q1': 'Welche konkreten Gefahren bestehen für die Organbildung des Fetus, falls ein Hauteingriff zu einer unerwarteten bakteriellen Infektion führt?',
  'tattoo.first.q2': 'Wie verändern die frühen hormonellen und immunologischen Umstellungen die Wundheilung, und welche Warnzeichen erfordern sofortige ärztliche Hilfe?',
  'tattoo.first.q3': 'Welche Symptome müssen wir besonders überwachen, wenn ein Tattoo abheilt, das kurz vor dem Bekanntwerden der Schwangerschaft gestochen wurde?',
  'tattoo.first.source': 'ACOG-Leitlinien zu Hauterkrankungen in der Schwangerschaft; NHS-Empfehlungen zu Tätowierungen in der Schwangerschaft.',

  // Tattoo: Second Trimester
  'tattoo.second.summary': 'Im zweiten Trimester (Wochen 13–26) ist die Hauptphase der Organogenese abgeschlossen, doch mütterliche Blutvolumenzunahme, Hautdehnung und Flüssigkeitsverschiebungen prägen weiterhin Komfort und Heilungsverlauf.',
  'tattoo.second.c1': 'Ein höheres mütterliches Blutvolumen und erweiterte Hautgefäße können beim Tätowieren zu verstärkten Blutungen und Hämatomen führen.',
  'tattoo.second.c2': 'Die rasche Gewebedehnung an Bauch, Brust, Hüfte und unterem Rücken verzerrt dauerhaft die Pigmentanordnung und die Motivgeometrie.',
  'tattoo.second.c3': 'Langes statisches Sitzen oder Liegen kann das Vena-cava-Kompressionssyndrom auslösen, den venösen Rückstrom behindern und Schwindel verursachen.',
  'tattoo.second.c4': 'Jede im zweiten Trimester auftretende Hautinfektion bedarf weiterhin einer zügigen ärztlichen Behandlung mit schwangerschaftsverträglichen Wirkstoffen.',
  'tattoo.second.q1': 'Bringen mein Blutdruck, ein möglicher Schwangerschaftsdiabetes oder eine erhöhte Hautempfindlichkeit spezielle Risiken mit sich?',
  'tattoo.second.q2': 'Welche Körperzonen sollten wegen der bevorstehenden Dehnung in den kommenden Monaten keinesfalls tätowiert werden?',
  'tattoo.second.q3': 'Inwiefern beeinflusst das erhöhte Blutvolumen die Blutung während des Stechens und die Gesamtdauer der Wundheilung?',
  'tattoo.second.source': 'NHS-Empfehlungen zu Body Art in der Schwangerschaft; allgemeine klinische Erwägungen.',

  // Tattoo: Third Trimester
  'tattoo.third.summary': 'Im späten Schwangerschaftsverlauf (Wochen 27–40) machen Haltungsbeschwerden, deutliche Wassereinlagerungen und die Nähe zur Geburt neue Hauteingriffe zu einem unnötigen Komplikationsrisiko.',
  'tattoo.third.c1': 'Eine frische Wunde oder eine nicht ausgeheilte Hautinfektion zum Zeitpunkt der Klinikaufnahme zur Entbindung erschwert die geburtshilfliche Betreuung.',
  'tattoo.third.c2': 'Längeres Liegen auf dem Rücken bei mehrstündigen Sitzungen begünstigt durch den Druck der Gebärmutter auf die Hohlvene das Vena-cava-Syndrom.',
  'tattoo.third.c3': 'Ödeme und straffe Hautspannung erschweren die präzise Kontrolle von Einstichtiefe und Farbsättigung erheblich.',
  'tattoo.third.c4': 'Körperlicher Stress und anhaltender Schmerz können bei der Mutter kurz vor dem errechneten Termin Tachykardien und Erschöpfung hervorrufen.',
  'tattoo.third.q1': 'Welche Komplikationen könnte eine noch heilende Tattoowunde bei der Aufnahme im Kreißsaal zur Entbindung verursachen?',
  'tattoo.third.q2': 'Wie wirken sich Wassereinlagerungen im dritten Trimester auf die Farbverteilung und die Anfälligkeit für Infektionen aus?',
  'tattoo.third.q3': 'Wie würde verfahren, wenn kurz vor dem Entbindungstermin eine Hautinfektion auftritt, etwa bezüglich Kreißsaal-Protokollen oder Venenzugängen?',
  'tattoo.third.source': 'Klinische Leitlinien des NHS zur Geburtsvorbereitung; allgemeine klinische Erwägungen.',

  // Tattoo: Breastfeeding
  'tattoo.breastfeeding.summary': 'Tätowierfarben werden intradermal eingelagert und von Makrophagen aufgenommen; ein Übergang intakter Pigmentpartikel in die Muttermilch ist klinisch nicht nachgewiesen. Der Schutz vor mütterlichen Infektionen steht im Vordergrund.',
  'tattoo.breastfeeding.c1': 'Intakte Pigmentkristalle sind zu groß für einen Übertritt in die Muttermilch, wenngleich Daten zu feinen Spaltprodukten rar sind.',
  'tattoo.breastfeeding.c2': 'Eine während der Stillzeit erworbene bakterielle Hautinfektion erfordert eine Antibiotikatherapie, die auf ihre Verträglichkeit für den Säugling geprüft werden muss.',
  'tattoo.breastfeeding.c3': 'Postpartale Erschöpfung und unruhiger Schlaf können die Immunressourcen schmälern und den Wundverschluss der Haut verzögern.',
  'tattoo.breastfeeding.c4': 'Professionelle Studios raten meist dazu, mit neuen Tattoos zu warten, bis sich der Stillrhythmus und die körperliche Erholung gefestigt haben.',
  'tattoo.breastfeeding.q1': 'Welche Antibiotika können bei einer lokalen Hautinfektion in der Stillzeit sicher eingenommen werden, ohne das Stillen zu unterbrechen?',
  'tattoo.breastfeeding.q2': 'Welchen zeitlichen Abstand zur Geburt empfehlen Sie vor der Durchführung rein optionaler Eingriffe mit Hautverletzung?',
  'tattoo.breastfeeding.q3': 'Gibt es beim Kind gesundheitliche Besonderheiten (wie Neugeborenengelbsucht oder Frühgeburt), die erhöhte Vorsicht bei mütterlichen Infektionen gebieten?',
  'tattoo.breastfeeding.source': 'NHS-Empfehlungen zu Stillzeit und Körperkunst; allgemeine klinische Erwägungen.',

  // Piercing: Trying to Conceive
  'piercing.trying.summary': 'Ein neues Körperpiercing vor der Empfängnis verlangt eine monatelange Abheilphase. Die Ausbildung des Stichkanals bindet Abwehrkräfte, und die vorausschauende Planung schwangerschaftsbedingter Körperveränderungen ist ratsam.',
  'piercing.trying.c1': 'Piercings an stark beanspruchten Stellen (Bauchnabel, Brustwarzen) benötigen 6 bis 12 Monate für einen stabilen, voll epithelialisierten Stichkanal.',
  'piercing.trying.c2': 'Tritt eine Schwangerschaft in der frühen Heilungsphase ein, können hormonelle und vaskuläre Umstellungen den Heilungsverlauf deutlich verlängern.',
  'piercing.trying.c3': 'Biokompatible Werkstoffe in Implantatqualität verhindern allergische Kontaktdermatitiden und senken die Gewebereaktivität.',
  'piercing.trying.q1': 'Können frühe Schwangerschaftshormone das Gewebe beeinflussen, wenn ein neues Piercing zum Zeitpunkt der Empfängnis noch nicht verheilt ist?',
  'piercing.trying.q2': 'Gibt es Desinfektionslösungen oder Nachsorgeprodukte, auf die bei möglichem Schwangerschaftseintritt verzichtet werden sollte?',
  'piercing.trying.source': 'Allgemeine klinische Erwägungen - keine eigenständigen ACOG- oder RCOG-Leitlinien für Piercings vor der Empfängnis.',

  // Piercing: First Trimester
  'piercing.first.summary': 'Das Stechen eines neuen Wundkanals und der Einsatz eines Fremdkörpers im ersten Trimester belasten das mütterliche Immunsystem in der empfindlichen Phase der Organogenese.',
  'piercing.first.c1': 'Die Kanalbildung ist ein aktiver Entzündungsprozess, der während der frühen Embryonalentwicklung kontinuierlich Immunressourcen bindet.',
  'piercing.first.c2': 'Morgenübelkeit, Erschöpfung und hormonelle Umstellungen im ersten Trimester können die gewissenhafte sterile Nachsorge im Alltag erschweren.',
  'piercing.first.c3': 'Eine systemische Bakteriämie ausgehend von einer infizierten Einstichstelle stellt in den Wochen 1–12 der Schwangerschaft ein ernsthaftes Risiko dar.',
  'piercing.first.c4': 'Professionelle Piercingstudios stechen schwangere Kundinnen aus Gründen des Risikomanagements grundsätzlich nicht; stimmen Sie den Zeitpunkt ärztlich ab.',
  'piercing.first.q1': 'Welche medizinischen Risiken bestehen für den Fetus, wenn der mütterliche Organismus in den Wochen 1–12 mit der Abheilung eines neuen Fremdkörpers ringt?',
  'piercing.first.q2': 'Wie rasch sollte ich ärztlichen Rat einholen, falls sich am Piercing Anzeichen einer beginnenden Entzündung zeigen?',
  'piercing.first.q3': 'Anhand welcher Symptome lässt sich eine normale Gewebereaktion von einer behandlungsbedürftigen Infektion mit Antibiotikabedarf unterscheiden?',
  'piercing.first.source': 'Klinischer Konsens des ACOG; NHS-Hinweise zu Schwangerschaft und Hautgewebe.',

  // Piercing: Second Trimester
  'piercing.second.summary': 'Im zweiten Trimester müssen Körperpiercings an die rasche Zunahme des Bauchumfangs angepasst werden. Besonders Bauchnabelpiercings neigen bei fortschreitender Bauchdehnung zur Migration.',
  'piercing.second.c1': 'Die Spannung der Bauchdecke übt Zug auf das Nabelpiercing aus, was häufig zu Wanderung, Ausdünnung des Hautstegs oder Ausstoßung führt.',
  'piercing.second.c2': 'Die stärkere Durchblutung der Haut steigert lokale Blutungsneigung und Gewebeempfindlichkeit an den Einstichstellen.',
  'piercing.second.c3': 'Bestehende, verheilte Piercings können oft schmerzfrei belassen werden, gegebenenfalls unter Wechsel auf biegsame, metallfreie Platzhalter.',
  'piercing.second.c4': 'Für allgemeine Migrationsursachen außerhalb einer Schwangerschaft verweisen Studios auf spezifische Einstufungen zur Piercing-Stabilität.',
  'piercing.second.q1': 'Wie wird sich das wachsende Bauchvolumen in den nächsten Monaten auf meinen Bauchnabel-Stichkanal auswirken?',
  'piercing.second.q2': 'Muss Körperschmuck vor anstehenden gynäkologischen Ultraschalluntersuchungen herausgenommen oder gewechselt werden?',
  'piercing.second.q3': 'Welche Warnsignale zeigen an, dass das Piercing durch die Hautdehnung unter unzulässig hohe mechanische Spannung gerät?',
  'piercing.second.source': 'NHS-Leitfaden zu Piercings in der Schwangerschaft; allgemeine klinische Erwägungen.',

  // Piercing: Third Trimester
  'piercing.third.summary': 'Neue Körperpiercings im dritten Trimester werden von Entbindungsteams wegen der bevorstehenden Geburt und klinischer Fremdkörpervorschriften ausdrücklich nicht empfohlen.',
  'piercing.third.c1': 'Geburtskliniken verlangen vor Operationen, Notkaiserschnitten oder HF-Chirurgie regelmäßig das Ablegen von Metallschmuck, um Verbrennungen zu verhüten.',
  'piercing.third.c2': 'Ein frischer, unvollständig verheilter Piercingkanal kurz vor der Entbindung bildet eine unnötige potenzielle Eintrittspforte für Keime.',
  'piercing.third.c3': 'Fortgeschrittene Wassereinlagerungen und rasche Haltungswechsel führen zu Druckstellen und Beschwerden an frischen Einstichen.',
  'piercing.third.q1': 'Wie lauten die genauen Richtlinien Ihrer Geburtsklinik bezüglich Körperschmuck bei Wehen, Entbindung oder einem ungeplanten Kaiserschnitt?',
  'piercing.third.q2': 'Sind bei einem schon lange bestehenden Piercing weiche, metallfreie Retainer während der Geburt gestattet, damit der Kanal offen bleibt?',
  'piercing.third.source': 'Klinische Protokolle von NHS und RCOG für Wehen, Entbindung und Operationssäle.',

  // Piercing: Breastfeeding
  'piercing.breastfeeding.summary': 'Brustwarzenpiercings während der Stillzeit haben direkte Auswirkungen auf die Durchgängigkeit der Milchgänge, das Anlegen des Kindes und das Mastitisrisiko. Für sonstige Stellen gelten die normalen Wundheilungsregeln.',
  'piercing.breastfeeding.c1': 'Frische oder heilende Piercings an der Mamille schaffen offene Wundkanäle nahe den Milchgängen und erhöhen das Risiko für Gangentzündungen, Mastitis und Abszesse.',
  'piercing.breastfeeding.c2': 'Verbleibender Schmuck während der Mahlzeit birgt akute Erstickungs- und Verschluckungsgefahr für den Säugling und stört das korrekte Saugen.',
  'piercing.breastfeeding.c3': 'Bei Piercings an anderen Körperstellen stehen die mütterliche Allgemeingesundheit und die Vermeidung stillunverträglicher Medikamente im Fokus.',
  'piercing.breastfeeding.q1': 'Welche medizinischen Risiken bezüglich Milchstau oder Mastitis bestehen, wenn ich mit bestehenden oder neuen Brustwarzenpiercings stille?',
  'piercing.breastfeeding.q2': 'Welche Antiseptika zur Wundreinigung und welche Antibiotika sind bei Piercings an anderen Körperstellen mit dem Stillen vereinbar?',
  'piercing.breastfeeding.source': 'WHO-Richtlinien zu Säuglingsernährung und Müttergesundheit; NHS-Stillberatung.',

  // Earlobe: Trying to Conceive
  'earlobe.trying.summary': 'Ohrläppchen weisen eine moderate Durchblutung und eine minimale Wundfläche auf. Sorgfältige sterile Arbeitsweise, Autoklavierung der Instrumente und biokompatibler Erstschmuck sind die zentralen Voraussetzungen.',
  'earlobe.trying.c1': 'Gewebe am Ohrläppchen heilt im Vergleich zu Knorpel- oder Körperpiercings zügig ab (in der Regel 6–8 Wochen).',
  'earlobe.trying.c2': 'Die konsequente Pflege mit steriler Kochsalzlösung schützt vor oberflächlicher bakterieller Besiedlung.',
  'earlobe.trying.c3': 'Biokompatible Materialien verringern das Risiko von Nickelsensibilisierungen und allergischen Kontaktekzemen.',
  'earlobe.trying.q1': 'Gibt es allgemeine gesundheitliche Vorsichtsmaßnahmen für kleinere Hauteingriffe, wenn man eine Schwangerschaft plant?',
  'earlobe.trying.q2': 'Ist sterile Kochsalzlösung das empfohlene Pflegemittel für die problemlose Abheilung von Ohrläppchen-Piercings?',
  'earlobe.trying.source': 'Allgemeine klinische Erwägungen - minimales prozedurales Risikoprofil.',

  // Earlobe: First Trimester
  'earlobe.first.summary': 'Obwohl Ohrläppchen-Piercings ein sehr geringes systemisches Risiko bergen, mahnt jeder elektive Eingriff im ersten Trimester zu Sorgfalt bei Infektionsschutz und Nachsorge.',
  'earlobe.first.c1': 'Komplikationen am Ohrläppchen sind selten systemisch, doch unnötige Keimexpositionen während der Organogenese zu vermeiden, entspricht ärztlicher Umsicht.',
  'earlobe.first.c2': 'Müdigkeit oder morgendliche Übelkeit im ersten Trimester können dazu verleiten, die tägliche Reinigung mit Kochsalzlösung zu vernachlässigen.',
  'earlobe.first.c3': 'Wählen Sie ein Fachstudio mit sterilen Einwegnadeln und autoklavierten Werkzeugen statt mechanischer Ohrlochpistolen.',
  'earlobe.first.q1': 'Spricht aus medizinischer Sicht etwas gegen ein einfaches Ohrläppchen-Piercing im ersten Trimester, wenn sterile Bedingungen gewahrt sind?',
  'earlobe.first.q2': 'Was sollte ich tun, wenn das Ohrläppchen heiß wird, sich rötet oder bei Berührung schmerzt?',
  'earlobe.first.source': 'Allgemeine klinische Erwägungen - niedriges Risikoprofil bei gebotener Umsicht im ersten Trimester.',

  // Earlobe: Second Trimester
  'earlobe.second.summary': 'Ein Ohrläppchen-Piercing im zweiten Trimester birgt geringe klinische Bedenken, sofern es fachgerecht mit sterilen Instrumenten und hochreinen Werkstoffen gestochen wird.',
  'earlobe.second.c1': 'Das zweite Trimester ist meist die Zeit des größten körperlichen Wohlbefindens und stabiler Immunverhältnisse in der Schwangerschaft.',
  'earlobe.second.c2': 'Zweimal tägliche Kochsalzspülungen genügen in der Regel vollkommen, um oberflächliche Verkeimungen zu verhüten.',
  'earlobe.second.c3': 'Biokompatible Metalle verhindern das Auftreten lokaler Überempfindlichkeitsreaktionen.',
  'earlobe.second.q1': 'Haben Sie medizinische Einwände dagegen, dass ich mir in dieser Phase der Schwangerschaft Ohrlöcher stechen lasse?',
  'earlobe.second.q2': 'Welche Schmuckmaterialien empfehlen Sie ausdrücklich, um allergische Hautreaktionen zuverlässig zu vermeiden?',
  'earlobe.second.source': 'Allgemeine klinische Erwägungen - bewährte klinische Praxis bei kleineren lokalen Eingriffen.',

  // Earlobe: Third Trimester
  'earlobe.third.summary': 'Ohrläppchen-Piercings im dritten Trimester bedeuten geringe systemische Belastungen, doch sollten die Richtlinien des Geburtskrankenhauses bezüglich Schmuck vorab geprüft werden.',
  'earlobe.third.c1': 'Erfolgt die Geburt vor Ablauf der 6–8-wöchigen Heilungsphase, kann die klinische Pflicht zum Ablegen des Schmucks zum vorzeitigen Zuwachsen führen.',
  'earlobe.third.c2': 'Sicherheitsvorschriften beim Einsatz von HF-Chirurgiegeräten bei einem Kaiserschnitt verlangen die Entfernung aller leitfähigen Metallteile.',
  'earlobe.third.q1': 'Muss ich frisch eingesetzte Ohrstecker während der Wehen, der Geburt oder im Operationssaal herausnehmen?',
  'earlobe.third.q2': 'Dürfen bei einem unvorhergesehenen Kaiserschnitt metallfreie Stecker getragen werden, oder muss sämtlicher Schmuck weichen?',
  'earlobe.third.source': 'Klinikvorschriften des NHS zu Schmuck auf Entbindungs- und Bettenstationen.',

  // Earlobe: Breastfeeding
  'earlobe.breastfeeding.summary': 'Ohrläppchen-Piercings in der Stillzeit bergen zu vernachlässigende systemische oder milchbezogene Risiken. Normale Hygiene und Achtsamkeit im Umgang mit dem Kind genügen.',
  'earlobe.breastfeeding.c1': 'Die Heilung am Ohrläppchen hat keinerlei Auswirkung auf Milchbildung, Brustdrüsengewebe oder die Sicherheit des Stillens.',
  'earlobe.breastfeeding.c2': 'Wenn das Kind größer wird, greift es gern nach Ohrschmuck; kleine, flach anliegende Stecker verringern das Verletzungsrisiko.',
  'earlobe.breastfeeding.c3': 'Verwenden Sie zweimal täglich sterile Kochsalzlösung, bis der Stichkanal vollkommen unempfindlich ist.',
  'earlobe.breastfeeding.q1': 'Gibt es irgendwelche Bedenken bezüglich Ohrläppchen-Piercings während der Stillzeit?',
  'earlobe.breastfeeding.q2': 'Welche Pflegeprodukte empfehlen Sie, die für den täglichen Kontakt mit dem Baby unbedenklich sind?',
  'earlobe.breastfeeding.source': 'Allgemeine klinische Erwägungen - vernachlässigbares systemisches Risikoprofil.',

  // PMU: Trying to Conceive
  'pmu.trying.summary': 'Permanent Make-up verbindet die intradermale Farbpigmentierung mit dem Einsatz lokaler Betäubungsmittel (wie Lidocain). Die zeitliche Abstimmung auf den Kinderwunsch sollte geklärt werden.',
  'pmu.trying.c1': 'Oberflächlich aufgetragene Betäubungsmittel gelangen über die eröffnete Hautbarriere in den mütterlichen Blutkreislauf.',
  'pmu.trying.c2': 'Farbpigmente nach Verordnung (EU) 2020/2081 schließen Schadstoffe aus, doch fehlen pharmakokinetische Studien zu Microblading-Farben in der Frühphase.',
  'pmu.trying.c3': 'Die zeitliche Planung notwendiger Nachbehandlungen (meist nach 6–8 Wochen) muss einen eventuellen Schwangerschaftseintritt einkalkulieren.',
  'pmu.trying.q1': 'Wie lange vor dem aktiven Versuch, schwanger zu werden, sollten kosmetische Pigmentierungen mit lokaler Betäubung abgeschlossen sein?',
  'pmu.trying.q2': 'Welche Risiken birgt der erforderliche Nachstechtermin, falls ich zwischen den beiden Sitzungen schwanger werde?',
  'pmu.trying.source': 'ACOG-Leitlinien zu dermatologischen und ästhetischen Eingriffen; Verordnung (EU) 2020/2081.',

  // PMU: First Trimester
  'pmu.first.summary': 'Permanent Make-up im ersten Trimester kombiniert Pigmenteintrag in die Dermis und Lokalanästhetika während der hochsensiblen Phase der Organogenese.',
  'pmu.first.c1': 'Topische Betäubungsmittel (Lidocain, Prilocain, Tetracain) gehen ins Blut über; ihr Einsatz bei rein ästhetischen Eingriffen wird in dieser Phase vermieden.',
  'pmu.first.c2': 'Hormonelle Sprünge der Frühschwangerschaft können die Talgproduktion der Haut verändern und zu ungleichmäßiger Farbaufnahme führen.',
  'pmu.first.c3': 'Professionelle PMU-Artists behandeln im ersten Trimester grundsätzlich nicht; sprechen Sie den Zeitplan mit Ihrer Betreuung ab.',
  'pmu.first.q1': 'Wie lautet Ihre ärztliche Einschätzung zu betäubenden Cremes (Lidocain/EMLA) während des ersten Schwangerschaftsdrittels?',
  'pmu.first.q2': 'Inwiefern beeinflussen Schwangerschaftshormone die Wundheilung und das Risiko für Pigmentflecken (postinflammatorische Hyperpigmentierung)?',
  'pmu.first.source': 'Stellungnahme des ACOG-Ausschusses zu ästhetischen Eingriffen; klinische Leitlinien des RCOG.',

  // PMU: Second Trimester
  'pmu.second.summary': 'Im zweiten Trimester sind die Aufnahme lokaler Betäubungsmittel und hormonbedingte Pigmentverschiebungen (Chloasma / Schwangerschaftsmaske) zentrale Themen.',
  'pmu.second.c1': 'Schwangerschaftshormone kurbeln die Melaninbildung an; Microblading oder Lippenpigmentierung können fleckig abheilen oder Verfärbungen ausbilden.',
  'pmu.second.c2': 'Rezepturen für Lokalanästhetika bedürfen auch weiterhin der ausdrücklichen Freigabe durch Ihr geburtshilfliches Betreuungsteam.',
  'pmu.second.c3': 'Die stärkere Gesichtsdurchblutung kann beim Einstechen zu Mikroblutungen führen, welche die eingebrachte Farbe teilweise ausschwemmen.',
  'pmu.second.q1': 'Besteht durch schwangerschaftsbedingte Pigmentflecken (Melasma) die Gefahr, dass das Permanent Make-up ungleichmäßig oder fleckig wird?',
  'pmu.second.q2': 'Befürwortet Ihre Praxis die Verwendung von Lidocain-Creme für kosmetische Behandlungen im Gesicht während des zweiten Trimesters?',
  'pmu.second.source': 'Allgemeine klinische Erwägungen; Leitlinien der British Association of Dermatologists zu Kosmetikeingriffen in der Schwangerschaft.',

  // PMU: Third Trimester
  'pmu.third.summary': 'Im dritten Trimester wird Permanent Make-up von medizinischer Seite wegen Anästhetika, Gesichtsödemen und Liegedauer regelmäßig aufgeschoben.',
  'pmu.third.c1': 'Wassereinlagerungen und Schwellungen im Gesicht verändern die natürlichen Konturen von Brauen und Lippen und führen nach der Geburt zu Asymmetrien.',
  'pmu.third.c2': 'Ein mehr als zweistündiges Verharren auf der Behandlungsliege kann die Vena cava abdrücken und zu Schwindelanfällen führen.',
  'pmu.third.c3': 'Frische Wundflächen und Infektionsrisiken kurz vor Entbindung und Geburt zu vermeiden, ist geburtshilflicher Standard.',
  'pmu.third.q1': 'In welchem Ausmaß können Schwellungen im Gesicht kurz vor dem Geburtstermin die Linienführung beim Permanent Make-up verfälschen?',
  'pmu.third.q2': 'Welche Medikamente dürften bei einer unerwarteten allergischen Reaktion oder Schwellung kurz vor der Entbindung bedenkenlos gegeben werden?',
  'pmu.third.source': 'Allgemeine klinische Erwägungen - Aufschub elektiver kosmetischer Eingriffe in der Spätgestation.',

  // PMU: Breastfeeding
  'pmu.breastfeeding.summary': 'Beim Permanent Make-up in der Stillzeit stehen der mögliche Übertritt lokaler Betäubungsmittel in die Muttermilch und die Wundhygiene im Mittelpunkt.',
  'pmu.breastfeeding.c1': 'Auf die Haut aufgetragenes Lidocain wird geringfügig resorbiert, Spuren können in die Milch gelangen; die Abstimmung der Stillzeiten mit der Hebamme ist ratsam.',
  'pmu.breastfeeding.c2': 'Die Farbpigmente verbleiben in der Dermis und den örtlichen Lymphbahnen; ein Übergang in die Muttermilch ist nicht festgestellt worden.',
  'pmu.breastfeeding.c3': 'Schlafmangel und hormonelle Anpassung können den feinen oberflächlichen Wundverschluss an den Augenbrauen verzögern.',
  'pmu.breastfeeding.q1': 'Wie viele Stunden nach dem Auftragen von betäubenden Cremes an Brauen oder Lippen sollte ich mit dem Stillen pausieren?',
  'pmu.breastfeeding.q2': 'Welche Pflegebalsame und Reinigungsmittel sind für den engen Kontakt mit dem Neugeborenen während der Heilung unbedenklich?',
  'pmu.breastfeeding.source': 'NHS-Hinweise zu Lokalanästhetika und Stillzeit; allgemeine klinische Erwägungen.',

  // Laser Removal: Trying to Conceive
  'removal.trying.summary': 'Bei der Laserentfernung werden Tattoofarben in mikroskopische Fragmente zerkleinert, die über Fresszellen, Lymphe und Nieren ausgeschieden werden. Klären Sie das Intervall zur Empfängnis.',
  'removal.trying.c1': 'Durch den Zertrümmerungsprozess zirkulieren über mehrere Wochen nach der Sitzung Pigmentabbauprodukte und Entzündungsbotenstoffe im Körper.',
  'removal.trying.c2': 'Das pharmakologische Schicksal und ein möglicher Plazentaübertritt dieser Nanopartikel in der frühen Konzeptionsphase sind klinisch kaum erforscht.',
  'removal.trying.c3': 'Laserzentren empfehlen häufig, begonnene Behandlungszyklen abzuschließen oder eine bewusste Pause einzulegen, bevor eine Schwangerschaft angestrebt wird.',
  'removal.trying.q1': 'Wie lange benötigt der Organismus nach einer Lasersitzung, um die zerkleinerten Farbreste vollständig abzutransportieren?',
  'removal.trying.q2': 'Würden Sie dazu raten, laufende Lasersitzungen vorübergehend auszusetzen, solange wir aktiv versuchen, schwanger zu werden?',
  'removal.trying.source': 'Laser-Leitlinien der British Association of Dermatologists; allgemeine klinische Erwägungen.',

  // Laser Removal: First Trimester
  'removal.first.summary': 'Eine Laserentfernung im ersten Trimester führt zu zirkulierenden Farbpartikeln und starkem lokalem Temperatur- und Entzündungsstress mitten in der Organbildung.',
  'removal.first.c1': 'Die Photothermolyse sprengt Pigmente in submikroskopische Bruchstücke, die in die Lymph- und Blutbahnen übertreten.',
  'removal.first.c2': 'Die Sicherheit zirkulierender Farbpartikel für das Ungeborene in den Wochen 1–12 (Organogenese) ist wissenschaftlich nicht belegt.',
  'removal.first.c3': 'Hochdosierte Betäubungscremes oder Injektionen von Anästhetika bei Lasersitzungen bedeuten eine unnötige Medikamentenbelastung.',
  'removal.first.c4': 'Dermatologen und Laserpraxen verschieben Tattooentfernungen prinzipiell auf die Zeit nach der Schwangerschaft; besprechen Sie die Planung ärztlich.',
  'removal.first.q1': 'Aus welchen exakten medizinischen Gründen raten Hautärztinnen und -ärzte im ersten Trimester von Laserbehandlungen ab?',
  'removal.first.q2': 'Worauf sollten wir bei der nächsten Vorsorgeuntersuchung achten, falls ich vor dem Wissen um die Schwangerschaft gelasert wurde?',
  'removal.first.source': 'ACOG-Leitlinien zu Laseranwendungen in der Schwangerschaft; klinischer pharmakologischer Konsens.',

  // Laser Removal: Second Trimester
  'removal.second.summary': 'Auch im zweiten Trimester bleibt die Laserentfernung ein wichtiges Beratungsthema, da Partikelabtransport und das Risiko für Pigmentstörungen fortbestehen.',
  'removal.second.c1': 'Die gesteigerte Melaninbildung in der Schwangerschaft erhöht drastisch die Gefahr bleibender dunkler (Hyperpigmentierung) oder heller Flecken (Hypopigmentierung).',
  'removal.second.c2': 'Der Abbau und Abtransport der zersprengten Pigmente über das Lymphsystem beansprucht nach jedem Lasergang 6–8 Wochen.',
  'removal.second.c3': 'Weitere Sitzungen bis nach der Entbindung ruhen zu lassen, ist die übereinstimmende Empfehlung von Laserspezialisten und Geburtsmedizinern.',
  'removal.second.q1': 'Erhöht die stärkere Hautpigmentierung während der Schwangerschaft die Gefahr von Narben oder Flecken durch den Laser?',
  'removal.second.q2': 'Ist es unbedenklich, das Tattoo bis nach der Geburt in einem halb verblassten Zustand zu belassen?',
  'removal.second.source': 'British Association of Dermatologists; allgemeine klinische Erwägungen.',

  // Laser Removal: Third Trimester
  'removal.third.summary': 'Eine Laserbehandlung im späten Schwangerschaftsverlauf belastet den Körper mit Entzündungsreaktionen, Hitzestress und Wundrisiken kurz vor der Geburt.',
  'removal.third.c1': 'Blasenbildung, oberflächliche Verbrennungen und Infektionsrisiken nach intensiven Lasersitzungen bereiten der Mutter unnötige Beschwerden nahe dem Termin.',
  'removal.third.c2': 'Systemische Entzündungsreaktionen können die Körpertemperatur und die Pulsfrequenz der Mutter nach oben treiben.',
  'removal.third.c3': 'Die während der Laserbehandlung erforderliche Lagerung und Bewegung sind im dritten Trimester beschwerlich.',
  'removal.third.q1': 'Welche Komplikationen drohen bei einer laserbedingten Blase oder Wunde, falls die Wehen unerwartet einsetzen?',
  'removal.third.q2': 'Welcher zeitliche Abstand nach der Entbindung gilt als sinnvoll, um die Laserbehandlung wiederaufzunehmen?',
  'removal.third.source': 'Allgemeine klinische Erwägungen - Aufschub optionaler Lasereingriffe in der späten Schwangerschaft.',

  // Laser Removal: Breastfeeding
  'removal.breastfeeding.summary': 'Während der Stillzeit wandern die von Fresszellen abtransportierten Pigmentpartikel in das Lymphsystem. Ob Spuren von Farbchemikalien in die Milch übergehen, ist ungeklärt.',
  'removal.breastfeeding.c1': 'Ob durch die Laserentfernung freigesetzte Farbpartikel in die Muttermilch übergehen, ist kaum untersucht; deshalb wird meist zur Vorsicht geraten.',
  'removal.breastfeeding.c2': 'Lasertherapien erfordern oft stark wirksame Betäubungscremes, deren Anwendung in der Stillzeit streng überwacht werden muss.',
  'removal.breastfeeding.c3': 'Das Verschieben der Lasersitzungen bis nach dem Abstillen schließt jegliche chemische Belastung für das gestillte Kind verlässlich aus.',
  'removal.breastfeeding.q1': 'Können mikroskopisch feine Farbpartikel aus der Laserentfernung in meine Muttermilch übergehen?',
  'removal.breastfeeding.q2': 'Empfehlen Sie, mit der Fortsetzung der Tattoo-Entfernung zu warten, bis mein Baby vollständig abgestillt ist?',
  'removal.breastfeeding.source': 'Klinische Richtlinien von RCOG und NHS zu Medikation und Eingriffen in der Stillzeit; allgemeine klinische Erwägungen.'
,

  // Additional Improvements (Features 1-7)
  'nav.mode_reference': 'Einzelverfahren-Referenz',
  'nav.mode_compare': 'Verfahrens-Vergleichsmatrix',
  'nav.mode_hospital': 'Klinik- & Kreißsaal-Richtlinien',
  'nav.mode_navel': 'Bauchnabel-Gewebedehnungs-Leitfaden',
  'nav.mode_nipple': 'Brustwarzen & Stillzeit-Ablauf',
  'nav.mode_postpartum': 'Postpartaler Zeitplan zur Wiederaufnahme',
  'nav.mode_triage': 'Komplikations-Triage-Referenz',
  'worksheet.custom_notes_title': 'Persönliche Notizen & Gesprächspunkte',
  'worksheet.custom_notes_desc': 'Ergänzen Sie vor dem Ausdrucken persönliche Fragen, Angaben zu bestehenden Piercings oder spezifische Themen für das Gespräch mit Ihrer Hebamme oder Ihrem Arzt:',
  'worksheet.custom_notes_placeholder': 'Eigene Fragen oder Notizen hier eingeben (z. B. "Bauchnabelpiercing unter der Geburt ansprechen", "Geplanter Kaiserschnitt in SSW 39 erwähnen")...',
  'worksheet.print_client_notes_title': 'Notizen der Patientin & spezifische Gesprächsfragen:',
  'compare.title': 'Verfahrens-Vergleichsmatrix im Direktvergleich',
  'compare.subtitle': 'Wählen Sie zwei oder drei Kombinationen aus Verfahren und Phase aus, um Gesprächsprioritäten, physiologische Begründungen und Beratungspunkte direkt gegenüberzustellen.',
  'compare.col_heading': 'Szenario {num}',
  'compare.select_proc': 'Verfahren wählen',
  'compare.select_stage': 'Phase wählen',
  'compare.clear_btn': 'Matrix zurücksetzen',
  'compare.prompt': 'Wählen Sie für mindestens zwei Spalten oben ein Verfahren und eine Phase aus, um die klinischen Aspekte nebeneinander zu vergleichen.',
  'compare.priority_label': 'Gesprächspriorität',
  'compare.rationale_label': 'Klinische Begründung',
  'compare.considerations_label': 'Wichtige physiologische Faktoren',
  'compare.source_label': 'Evidenzgrundlage',
  'hospital.title': 'Leitfaden für Schmuckrichtlinien in Klinik und Kreißsaal',
  'hospital.subtitle': 'Strukturierte Checkliste für das Vorsorgegespräch in der 36. Schwangerschaftswoche bezüglich Elektrokauterisation, Notentbindungen und Neugeborenenkontakt.',
  'hospital.intro': 'Klinikvorgaben zu Körperschmuck unter der Geburt variieren je nach Geburtsstation, Operationsstandards und regionalen Trägern. Besprechen Sie diese Punkte vor der 36. SSW mit Ihrer Hebamme oder Ihrem Facharzt.',
  'hospital.item1_title': 'Elektrokauterisation & monopolare Diathermiegeräte',
  'hospital.item1_desc': 'Bei einer ungeplanten operativen Entbindung (Kaiserschnitt) erzeugen monopolare Elektrokautergeräte einen Stromkreis durch den Körper. Leitfähiger metallischer Körperschmuck kann thermische Verbrennungen verursachen, wenn er im Strompfad zwischen Schnittstelle und Neutralelektrode liegt.',
  'hospital.item2_title': 'Notfall-Atemwegsmanagement & Narkoseführung',
  'hospital.item2_desc': 'Schmuck im Bereich von Mund, Lippen, Zunge und Nase stellt bei einer erforderlichen Notintubation oder Maskenbeatmung unter Vollnarkose ein Risiko für Atemwegsverlegungen oder Dislokationen dar.',
  'hospital.item3_title': 'Becken-, Genital- & Perinealschmuck',
  'hospital.item3_desc': 'Genital- und Damm-Piercings bergen erhebliche Verletzungs- und Einreißrisiken bei der vaginalen Dehnung und behindern Dammschnitte (Episiotomien) oder Wundversorgungen. Kliniken fordern vor Geburtsbeginn die vollständige Entfernung.',
  'hospital.item4_title': 'Hautkontakt & Berührung des Neugeborenen',
  'hospital.item4_desc': 'Schmuck an Gesicht, Hals, Handgelenken oder Oberkörper kann beim unmittelbaren Haut-zu-Haut-Kontakt, der Erstversorgung und dem ersten Anlegen die zarte Neugeborenenhaut mechanisch verletzen.',
  'hospital.item5_title': 'Magnetresonanztomographie (MRT)',
  'hospital.item5_desc': 'Sollte postpartal eine dringliche MRT-Untersuchung notwendig sein, stellt ferromagnetischer Schmuck durch Projektilkräfte, Torsion und hochfrequenzinduzierte Erwärmung ein ernstes Risiko dar.',
  'hospital.action_title': 'Handlungsschritte für das Hebammen-Gespräch in SSW 36',
  'hospital.action1': 'Erfragen Sie die verbindlichen Vorschriften für Kreißsaal und OP Ihrer gewählten Geburtsklinik.',
  'hospital.action2': 'Bitten Sie um Eintragung in den Mutterpass, ob nicht-metallische inerte Retainer an nicht-operativen Stellen gestattet sind.',
  'hospital.action3': 'Planen Sie das rechtzeitige Ablegen von Gesichts-, Oral-, Genital- und Bauchnabelschmuck weit vor dem errechneten Entbindungstermin oder nutzen Sie Studiohilfe bei festsitzendem Schmuck.',
  'hospital.product_note_title': 'Produkthinweis: Nicht-metallische inerte Retainer',
  'hospital.product_note_body': 'Nicht leitende, metallfreie Retainer aus PP-R-Random-Copolymer oder anderen nicht leitenden Polymeren in Implantatqualität leiten keinen elektrischen Strom und sind nicht ferromagnetisch. Sie werden oft genutzt, um einen bestehenden Stichkanal offen zu halten, wenn die Klinikvorschriften metallfreie Retainer erlauben. OP- und Narkoseprotokolle liegen jedoch in der Verantwortung des anwesenden OP- und Kreißsaalteams, das über jeden Fremdkörper im OP entscheidet.',
  'navel.title': 'Bauchnabel-Gewebedehnungs-Leitfaden',
  'navel.subtitle': 'Anschauliche Modelle mechanischer Gewebespannung zur Verdeutlichung von Bauchdeckenexpansion, Scherkräften und Kanalverzerrung in den Trimestern.',
  'navel.intro': 'Wenn die wachsende Gebärmutter die vordere Bauchwand dehnt, gerät das Nabelgewebe unter erhebliche Zugkräfte. Dieser Leitfaden veranschaulicht die mechanischen Veränderungen.',
  'navel.t1_title': 'Vor der Empfängnis / 1. Trimester: Ruhelage des Gewebes',
  'navel.t1_desc': 'Die Gewebetiefe ist regulär und ohne zusätzliche Dehnungsspannung. Der Stichkanal verläuft vertikal im entspannten Subkutangewebe ohne Veränderung der Bauchdecke.',
  'navel.t2_title': '2. Trimester: Laterale und longitudinale Dehnung',
  'navel.t2_desc': 'Das wachsende Uterusvolumen flacht die Nabelvertiefung ab. Die Haut erfährt zunehmende Zugkräfte in mehrere Richtungen, die Scherkräfte an den starren Schmuckenden erzeugen.',
  'navel.t3_title': '3. Trimester: Starke Scherkräfte und Nabelhervortreten',
  'navel.t3_desc': 'Maximale Dehnung kann zum Verstreichen oder Hervortreten des Bauchnabels führen. Der Druck spannt die Haut über starrem Schmuck straff, was das Risiko von Gewebedurchwanderung (Migration), Einreißen oder hypertrophen Narben stark erhöht.',
  'navel.stress_points_title': 'Wichtige Dehnungsfaktoren für das Gespräch mit Hebamme oder Arzt',
  'navel.stress_p1': 'Sichtbares Dünnerwerden der Hautbrücke zwischen den Stichkanälen signalisiert übermäßige Zugspannung und erfordert das Ablegen des Schmucks, um ein Durchreißen zu verhindern.',
  'navel.stress_p2': 'Starre gebogene Metallstäbe können sich der veränderten Wölbung nicht anpassen, was an den Endkugeln zu Druckstellen und Gewebeschädigungen führen kann.',
  'navel.stress_p3': 'Durch das Verstreichen des Nabels entfällt der natürliche Hohlraum, sodass Hosenbünde und Stützbänder direkt am Schmuck reiben und Scherkräfte ausüben.',
  'navel.sizing_link_prefix': 'Technische Angaben zu Schmuckmaßen, Stärkenumrechnungen und Stablängen finden Sie im',
  'navel.sizing_link_text': 'Schmuckgrößen-Visualisierer',
  'navel.sizing_link_suffix': '. Nehmen Sie in der Schwangerschaft keine eigenmächtigen Dehnungen oder Größenwechsel vor; stimmen Sie Schmuckanpassungen mit Ihrem Piercer und Ihrer Hebamme ab.',
  'navel.product_note_title': 'Produkthinweis: Flexible Bauchnabel-Retainer',
  'navel.product_note_body': 'Patrick Poli, Schöpfer von BioFlex® body jewelry, hat dafür ein flexibles PP-R-Random-Copolymer ausgewählt, das sich den Körperkonturen anpasst, ohne starre Druckpunkte zu erzeugen. PP-R wird im Spritzgussverfahren als monolithisches Einzelstück gefertigt; es ist kein PTFE (das aus extrudierten Stäben spanend bearbeitet werden muss und leicht die Ausrichtung verliert). Wenn Zugspannung Rötungen, Schmerzen oder Gewebeausdünnung hervorruft, entfernen Sie den Schmuck umgehend, unabhängig vom Material.',
  'nipple.title': 'Brustwarzenpiercings & Stillzeit-Ablauf',
  'nipple.subtitle': 'Orientierung zur Stillmechanik, zum Entfernen des Schmucks vor jedem Anlegen, zur Atemwegssicherheit des Säuglings und dazu, wann Sie eine Stillberaterin hinzuziehen sollten.',
  'nipple.intro': 'Brustwarzenpiercings erfordern während Schwangerschaft und Stillzeit umsichtige Maßnahmen, um das Stillen zu schützen und ernste Komplikationen zu vermeiden.',
  'nipple.choking_title': 'Lebenswichtige Atemwegssicherheit: Schmuck vor jedem Anlegen oder Abpumpen entfernen',
  'nipple.choking_desc': 'Jeder im Brustwarzenbereich verbleibende Schmuckteil, Kugeln oder Retainer stellt während des Stillens oder Abpumpens eine unmittelbare Lebensgefahr durch Ersticken, Aspiration und Atemwegsverlegung für den Säugling dar. Der Schmuck muss vor jedem Anlegen restlos entfernt werden.',
  'nipple.mech_title': 'Stillmechanik & Milchaustrittsdynamik',
  'nipple.mech_desc': 'Die menschliche Brustwarze besitzt zwischen 4 und 18 feine Milchausführungsgänge. Abgeheilte Piercingkanäle kreuzen oder berühren häufig mehrere dieser Kanäle. Beim Milcheinschuss kann Milch sowohl aus den natürlichen Poren als auch aus den Öffnungen des Stichkanals austreten.',
  'nipple.latch_title': 'Anlegetechnik & Gaumenabdichtung',
  'nipple.latch_desc': 'Narbengewebe früherer Piercings kann die Gewebeelastizität und das Vorwölben der Brustwarze beeinflussen, wenn das Kind die Brustwarze tief an den weichen Gaumen saugt, was zu wunden Brustwarzen oder erschwertem Erfassen führen kann.',
  'nipple.consult_title': 'Begleitung durch Hebamme oder Stillberaterin',
  'nipple.consult_desc': 'Versuchen Sie nicht, Milchgangsdurchgängigkeit oder Narbendichte selbst zu beurteilen. Vereinbaren Sie bei Milchstau, Schmerzen oder Anlegeproblemen eine persönliche Beratung bei einer IBCLC-zertifizierten Stillberaterin oder Ihrer Hebamme.',
  'nipple.infection_title': 'Mastitisrisiko durch häufiges Wiedereinsetzen',
  'nipple.infection_desc': 'Wiederholtes Einsetzen und Herausnehmen von Schmuck in einen gereizten Stichkanal zwischen den Stillmahlzeiten bringt Hautkeime direkt in die Milchgänge ein und erhöht das Risiko einer infektiösen Mastitis erheblich.',
  'postpartum.title': 'Postpartaler Zeitplan zur Wiederaufnahme',
  'postpartum.subtitle': 'Physiologische Orientierungspunkte zu Wundheilung, Immunerholung, Kreislaufstabilisierung und Hormonumstellung vor neuen Körperkunst-Eingriffen.',
  'postpartum.intro': 'Die Wiederaufnahme von Tattoos oder Piercings nach der Geburt hängt von physiologischen Heilungsschritten ab und nicht von starren Fristen. Besprechen Sie diese Erholungsphasen bei Ihrer Nachsorgeuntersuchung.',
  'postpartum.p1_title': 'Wochen 0–6: Frühwochenbett & Kreislauferholung',
  'postpartum.p1_desc': 'Uterusrückbildung, Wochenfluss, Wundheilung der Plazentahaftstelle und die Umstellung des Blutvolumens stehen im Vordergrund. Das Immunsystem erholt sich von der Schwangerschaftsmodulation; elektive Hauteingriffe sind medizinisch nicht ratsam.',
  'postpartum.p2_title': 'Wochen 6–12: Nachsorgeuntersuchung & Gewebekonsolidierung',
  'postpartum.p2_desc': 'Nach Bestätigung der regulären Rückbildung bei der Nachsorgeuntersuchung sind Geburtsverletzungen oder Kaiserschnittnarben weitgehend gefestigt. Schlafmangel, Erschöpfung und die hormonelle Stillumstellung fordern das Immunsystem jedoch weiterhin.',
  'postpartum.p3_title': 'Monate 3–6: Hormonelle Normalisierung & Gewebeumbau',
  'postpartum.p3_desc': 'Die durch Relaxin bewirkte Bindegewebslockerung bildet sich allmählich zurück. Bei nicht-stillenden Frauen normalisieren sich Barrierefunktion der Haut, Gefäßreaktivität und Basislaborwerte weitgehend.',
  'postpartum.p4_title': 'Stilldauer bis zum Abstillen: Fortlaufende Aspekte',
  'postpartum.p4_desc': 'Während der aktiven Stillzeit hält ein erhöhter Prolaktinspiegel die gewohnte Zyklusruhe aufrecht und beeinflusst die Gewebehydratation. Laserbehandlungen und Pigmentierungen erfordern weiterhin Vorsicht zum Schutz des Säuglings.',
  'postpartum.closing_title': 'Klinischer Zeithorizont',
  'postpartum.closing_desc': 'Die individuelle Erholungsdauer unterscheidet sich nach Geburtsverlauf, Blutverlust, Nährstoffstatus und Stillgewohnheiten deutlich. Stimmen Sie den Zeitpunkt geplanter Eingriffe immer direkt mit Ihrem Facharzt oder Ihrer Hebamme ab.',
  'triage.title': 'Komplikations-Triage-Referenz für bestehende Piercings & Tattoos',
  'triage.subtitle': 'Klinische Unterscheidung zwischen mechanischer Dehnungsreizung und Warnzeichen, die eine zügige ärztliche Begutachtung durch Hebamme oder Arzt erfordern.',
  'triage.intro': 'Diese Übersicht hilft, harmlose mechanische Spannungen von behandlungsbedürftigen Entzündungen zu unterscheiden. Dieses Werkzeug stellt keine ärztliche Diagnose dar; alle Auffälligkeiten bedürfen fachlicher Abklärung.',
  'triage.cat_mechanical': 'Mechanische Reizung (lokale Gewebespannung)',
  'triage.cat_medical': 'Symptome mit dringendem ärztlichen Abklärungsbedarf',
  'triage.mech_sym1': 'Leichte Rötung (Erythem), die strikt auf die unmittelbaren Stichkanalränder begrenzt ist, ohne Ausbreitung oder Überwärmung.',
  'triage.mech_sym2': 'Fehlen von Fieber, Schüttelfrost, Gliederschmerzen oder ausgeprägtem Krankheitsgefühl.',
  'triage.mech_sym3': 'Klares oder blassgelbliches Wundsekret (Lymphe), das zu Krusten eintrocknet und keinen unangenehmen Geruch aufweist.',
  'triage.mech_sym4': 'Missempfindungen, die rasch nachlassen, sobald enge Kleidung, Hosenbünde oder Druckstellen entlastet werden.',
  'triage.mech_action': 'Maßnahme: Druckentlastung durch weite Kleidung, Berührungen nur mit gewaschenen Händen und Rücksprache mit dem Piercer zur Schmuckanpassung. Bei Verschlechterung Hebamme oder Arzt kontaktieren.',
  'triage.med_sym1': 'Sich rasch ausbreitende, heiße, pulsierende Rötung, die weit über das Piercing oder Tattoo hinausreicht.',
  'triage.med_sym2': 'Allgemeinsymptome wie Fieber (>38 °C), Schüttelfrost, Herzrasen oder deutliches mütterliches Unwohlsein.',
  'triage.med_sym3': 'Dickflüssiges, gelbliches oder grünliches eitriges Exsudat mit wahrnehmbar üblem Geruch.',
  'triage.med_sym4': 'Rote streifenförmige Lymphbahnen (Lymphangitis), die sich in Richtung der regionalen Lymphknoten ausbreiten.',
  'triage.med_sym5': 'Zunehmendes Dünnerwerden der Haut über dem Schmuck mit drohendem Durchreißen oder Ausstoßen.',
  'triage.med_action': 'Maßnahme: Suchen Sie umgehend Ihre Hebamme, Frauenärztin, Hausärztin oder eine Notfallambulanz auf. Warten Sie nicht auf einen Studiotermin.'
};

// Dictionaries map - French, Italian and German registered with English
const I18N_ES = {
  // Search Bar & Filter Strings
  'search.placeholder': 'Buscar pautas clínicas, temas o materiales (ej. piercing, ombligo, mastitis)...',
  'search.clear_btn': 'Borrar búsqueda',
  'search.filter_all': 'Todos los temas',
  'search.filter_procedures': 'Procedimientos',
  'search.filter_guidelines': 'Pautas especializadas',
  'search.results_count': '{count} tema(s) clínico(s) encontrado(s) para "{query}"',
  'search.no_results_title': 'No se encontraron temas clínicos',
  'search.no_results_desc': 'Intente buscar por tipo de procedimiento (tatuaje, piercing, micropigmentación), etapa (primer trimestre, lactancia) o aspecto específico (tensión umbilical, vía aérea del lactante, mastitis, signos de infección).',
  'search.item_category_procedure': 'Referencia de seguridad del procedimiento',
  'search.item_category_guideline': 'Pautas y temas clínicos',
  'search.view_action': 'Ver tema',

  'meta.title': 'Referencia de seguridad para procedimientos en embarazo y lactancia | Poli International',
  'meta.description': 'Punto de partida clínico y fundamentado para consultar con su médico o matrona sobre tatuajes, piercings y maquillaje permanente durante el embarazo y la lactancia.',
  'app.badge': 'Referencia clínica y de estudio',
  'app.title': 'Seguridad en procedimientos: embarazo y lactancia',
  'app.subtitle': 'Una guía clínica razonada para orientar la consulta con su médico o matrona sobre tatuajes, piercings y maquillaje permanente.',
  'app.lang_label': 'Idioma:',
  'lang.en': 'Inglés',
  'lang.de': 'Alemán',
  'lang.fr': 'Francés',
  'lang.es': 'Español',
  'lang.it': 'Italiano',
  'lang.nl': 'Neerlandés',
  'lang.pt': 'Portugués',
  'form.procedure_label': 'Tipo de procedimiento',
  'form.stage_label': 'Etapa actual',
  'form.procedure_placeholder': '- Seleccione el procedimiento -',
  'form.stage_placeholder': '- Seleccione la etapa -',
  'proc.tattoo': 'Nuevo tatuaje',
  'proc.piercing': 'Piercing corporal (no lóbulo)',
  'proc.earlobe': 'Piercing en el lóbulo de la oreja',
  'proc.pmu': 'Maquillaje permanente / microblading',
  'proc.removal': 'Eliminación de tatuajes con láser',
  'stage.trying': 'Búsqueda de embarazo (etapa preconcepcional)',
  'stage.first': 'Primer trimestre (semanas 1–12)',
  'stage.second': 'Segundo trimestre (semanas 13–26)',
  'stage.third': 'Tercer trimestre (semanas 27–40)',
  'stage.breastfeeding': 'Lactancia materna / posparto',
  'prompt.title': 'Seleccione un procedimiento y una etapa',
  'prompt.body': 'Seleccione arriba un procedimiento de arte corporal y su etapa de gestación o lactancia para consultar puntos de conversación clínica y un recordatorio de preguntas imprimible.',
  'tier1.tag': 'Nivel de prioridad 1: consulta temprana',
  'tier1.title': 'Prioridad alta: consultar cuanto antes con su médico o matrona',
  'tier1.sub': 'Factores fisiológicos activos, desarrollo embrionario o distensión de tejidos requieren valoración clínica previa antes de programar una cita.',
  'tier2.tag': 'Nivel de prioridad 2: consulta programada',
  'tier2.title': 'Consulta programada con su médico o matrona',
  'tier2.sub': 'Las variaciones fisiológicas maternas influyen en la cicatrización o colocación; trátelas en su próxima revisión prenatal programada.',
  'tier3.tag': 'Nivel de prioridad 3: consulta de rutina',
  'tier3.title': 'Consulta de rutina con su médico o matrona',
  'tier3.sub': 'Menor complejidad del procedimiento; mencione los protocolos estériles estándar y los cuidados posteriores a su equipo asistencial.',
  'section.summary': 'Fundamento clínico',
  'section.considerations': 'Consideraciones clínicas y fisiológicas',
  'section.checklist': 'Preguntas para su médico o matrona',
  'section.checklist_intro': 'Marque las preguntas que desee plantear a su matrona, obstetra o médico de atención primaria en su próxima consulta:',
  'section.provenance': 'Origen y base de la evidencia',
  'section.authority_title': 'Criterio y autoridad de su equipo médico',
  'section.authority_body': 'Esta herramienta ofrece orientación clínica general. Su médico o matrona conoce su historial específico, análisis de sangre y evolución gestacional, siendo el único responsable de las decisiones sobre su salud.',
  'section.product_note_title': 'Nota de producto: materiales para joyería de piercing',
  'section.sibling_title': 'Herramientas de consulta clínica relacionadas',
  'section.print_btn': 'Imprimir recordatorio de preguntas',
  'section.meta_reviewed': 'Última revisión:',
  'section.meta_date': 'Septiembre de 2026',
  'section.meta_source': 'Base de la revisión clínica:',
  'provenance.eu_instrument_prefix': 'Instrumento legal oficial:',
  'provenance.eu_instrument_name': 'Reglamento (UE) 2020/2081 de la Comisión (anexo XVII de REACH: tintas para tatuajes y maquillaje permanente)',
  'print.doc_title': 'Guía para la consulta con su médico o matrona',
  'print.patient_date': 'Fecha:',
  'print.notes_title': 'Notas de la consulta clínica y plan de seguimiento',
  'print.patient_copy': 'Copia para la paciente',
  'print.clinician_signature': 'Firma del profesional: _______________________',
  'print.gestational_age': 'Edad gestacional / Estado: ________________',
  'print.footer_note': 'Este documento proporciona información de apoyo para la consulta prenatal o posparto. No sustituye la evaluación médica individualizada de su médico o matrona.',
  'product_note.body': 'Patrick Poli, creador de la joyería corporal BioFlex®, eligió para ella un PP-R (copolímero aleatorio de polipropileno) para que la joya acompañe los cambios anatómicos. Materiales flexibles como la joyería BioFlex® y los metales de grado implante son opciones de baja reactividad para valorar con un anillador profesional en perforaciones existentes o en curación durante el embarazo. El PP-R se moldea por inyección en una sola pieza monolítica; no es PTFE (el cual se mecaniza a partir de barra extruida). Consulte siempre con su anillador profesional y su equipo médico sobre la elección de joyería durante el embarazo.',
  'disclaimer.title': 'Aviso clínico importante:',
  'disclaimer.body': 'Esta herramienta tiene fines formativos y en ningún caso sustituye el asesoramiento, diagnóstico o tratamiento médico. Consulte siempre cualquier procedimiento de arte corporal con su matrona, ginecólogo o médico antes de reservar.',
  'sibling.med_title': 'Comprobador de interacciones farmacológicas',
  'sibling.med_desc': 'Revise posibles interacciones entre medicamentos recetados, tratamientos habituales y procedimientos de arte corporal.',
  'sibling.migration_title': 'Riesgo de migración y rechazo de piercings',
  'sibling.migration_desc': 'Evalúe la tensión mecánica, profundidad y movilidad tisular que condicionan la estabilidad de la joya.',
  'tattoo.trying.summary': 'Los pigmentos de tatuaje se depositan en la dermis y los ganglios linfáticos regionales. Aunque no existen evidencias de teratogenia antes de la concepción, cualquier infección cutánea local durante la fase inicial de implantación requiere un manejo obstétrico cuidadoso.',
  'tattoo.trying.c1': 'Los datos clínicos sobre la circulación sistémica de nanopartículas de tinta durante la ventana de concepción son muy limitados.',
  'tattoo.trying.c2': 'Una infección bacteriana grave en la piel que requiera antibióticos durante la implantación embrionaria restringe las opciones farmacológicas.',
  'tattoo.trying.c3': 'La formulación de tintas varía; las conformes con el Reglamento (UE) 2020/2081 restringen más de 4.000 sustancias peligrosas, aminas aromáticas y metales pesados.',
  'tattoo.trying.c4': 'Programar la cita fuera de los días fértiles permite descartar el embarazo antes de comenzar el proceso de cicatrización cutánea.',
  'tattoo.trying.q1': 'Si me quedara embarazada poco después de tatuarme, ¿podría la cicatrización interferir con la implantación embrionaria?',
  'tattoo.trying.q2': '¿Qué familias de antibióticos deben evitarse en caso de complicación cutánea mientras buscamos el embarazo?',
  'tattoo.trying.q3': '¿Están al día mis vacunas contra el tétanos y la hepatitis B antes de someterme a procedimientos que perforan la piel?',
  'tattoo.trying.source': 'Criterio clínico general: sin guías específicas preconcepcionales publicadas por ACOG o RCOG.',
  'tattoo.first.summary': 'El primer trimestre (semanas 1–12) es el periodo crítico de organogénesis fetal. Toda infección materna sistémica, fiebre alta o cascada inflamatoria reviste una notable relevancia médica en esta fase.',
  'tattoo.first.c1': 'La formación de órganos ocurre primordialmente entre las semanas 3 y 8 de gestación, requiriendo máxima estabilidad fisiológica materna.',
  'tattoo.first.c2': 'Las intervenciones con rotura de la barrera cutánea conllevan riesgo de inoculación bacteriana (estafilococos, estreptococos) y patógenos hemáticos.',
  'tattoo.first.c3': 'Las náuseas, vómitos matutinos y cambios inmunitarios del primer trimestre pueden dificultar los cuidados higiénicos y retrasar la curación.',
  'tattoo.first.c4': 'Los estudios profesionales de tatuaje no aceptan clientas embarazadas dentro de sus protocolos de gestión de riesgos; valore el momento con su médico.',
  'tattoo.first.q1': '¿Qué repercusiones tendría sobre el desarrollo fetal una infección bacteriana derivada de un procedimiento cutáneo en el primer trimestre?',
  'tattoo.first.q2': '¿Cómo afectan las alteraciones inmunitarias del inicio del embarazo a la cicatrización cutánea y qué síntomas exigen atención inmediata?',
  'tattoo.first.q3': 'Si me hice un tatuaje justo antes de saber que estaba embarazada, ¿a qué signos de alarma debemos prestar especial atención?',
  'tattoo.first.source': 'Guías de ACOG sobre afecciones cutáneas en el embarazo; recomendaciones de NHS sobre tatuajes en gestantes.',
  'tattoo.second.summary': 'En el segundo trimestre (semanas 13–26) ha concluido la organogénesis primaria, pero el incremento de la volemia materna, la distensión tisular y los cambios hídricos afectan a la comodidad y al resultado final.',
  'tattoo.second.c1': 'El aumento del volumen sanguíneo materno y la dilatación vascular cutánea pueden provocar un sangrado más abundante y mayor hematoma.',
  'tattoo.second.c2': 'La rápida expansión dérmica en abdomen, caderas, pecho y zona lumbar distorsiona irreversiblemente el diseño y la alineación de la tinta.',
  'tattoo.second.c3': 'Permanecer sentada o acostada durante sesiones largas puede desencadenar el síndrome de hipotensión supina por compresión de la vena cava.',
  'tattoo.second.c4': 'Cualquier infección dérmica surgida en el segundo trimestre debe tratarse de inmediato con antibióticos compatibles con la gestación.',
  'tattoo.second.q1': '¿Suponen mi presión arterial, glucemia o mayor reactividad cutánea algún factor de riesgo adicional?',
  'tattoo.second.q2': '¿Qué zonas corporales conviene descartar por completo previendo el estiramiento cutáneo en los próximos meses?',
  'tattoo.second.q3': '¿En qué medida el mayor volumen sanguíneo puede intensificar el sangrado durante la sesión y prolongar la curación?',
  'tattoo.second.source': 'Recomendaciones de NHS sobre arte corporal en el embarazo; criterio clínico general.',
  'tattoo.third.summary': 'En la recta final del embarazo (semanas 27–40), las molestias posturales, la retención de líquidos y la proximidad del parto convierten los nuevos tatuajes en un riesgo evitable de complicaciones.',
  'tattoo.third.c1': 'Presentar una herida abierta o una infección activa en el momento del ingreso hospitalario para dar a luz complica la atención obstétrica.',
  'tattoo.third.c2': 'Mantenerse boca arriba en sesiones prolongadas comprime la vena cava inferior debido al peso uterino, causando mareos y bajadas de tensión.',
  'tattoo.third.c3': 'El edema tisular y la tensión de la piel dificultan calibrar con exactitud la profundidad de inserción y la saturación del pigmento.',
  'tattoo.third.c4': 'El dolor prolongado y el cansancio físico pueden desencadenar taquicardias maternas y agotamiento en fechas próximas a término.',
  'tattoo.third.q1': '¿Qué inconvenientes causaría un tatuaje en fase de cicatrización al ingresar en el paritorio para el parto?',
  'tattoo.third.q2': '¿Cómo afecta la retención de líquidos del tercer trimestre a la distribución del pigmento y a la susceptibilidad infecciosa?',
  'tattoo.third.q3': 'Si apareciera una infección en la piel poco antes de la fecha prevista del parto, ¿cómo afectaría a los protocolos y accesos venosos?',
  'tattoo.third.source': 'Pautas clínicas de NHS sobre preparación al parto; criterio clínico general.',
  'tattoo.breastfeeding.summary': 'Los pigmentos de tatuaje quedan atrapados en la dermis y fagocitados por macrófagos; no se ha constatado el paso de partículas intactas a la leche materna. La prevención de infecciones maternas es la prioridad clínica.',
  'tattoo.breastfeeding.c1': 'Las partículas íntegras de pigmento son demasiado voluminosas para filtrarse a la leche materna, aunque los datos sobre subproductos son escasos.',
  'tattoo.breastfeeding.c2': 'Una infección bacteriana contraída durante la lactancia exige pautar antibióticos compatibles con la seguridad del lactante.',
  'tattoo.breastfeeding.c3': 'El cansancio derivado del puerperio y los descansos fragmentados pueden mermar las defensas y retardar el cierre de la herida dérmica.',
  'tattoo.breastfeeding.c4': 'Los profesionales del tatuaje recomiendan esperar a que la lactancia y la recuperación física materna estén plenamente consolidadas.',
  'tattoo.breastfeeding.q1': 'En caso de infección bacteriana en la piel, ¿qué antibióticos son seguros sin necesidad de interrumpir las tomas?',
  'tattoo.breastfeeding.q2': '¿Qué plazo de recuperación posparto considera recomendable antes de realizar un procedimiento cutáneo voluntario?',
  'tattoo.breastfeeding.q3': '¿Presenta el bebé alguna condición especial (como ictericia o prematuridad) que aconseje mayor precaución ante infecciones maternas?',
  'tattoo.breastfeeding.source': 'Orientaciones de NHS sobre lactancia y arte corporal; criterio clínico general.',
  'piercing.trying.summary': 'Hacerse un nuevo piercing corporal antes de concebir requiere meses de cicatrización ininterrumpida. La maduración del canal consume recursos inmunitarios y conviene anticipar los cambios anatómicos.',
  'piercing.trying.c1': 'Las perforaciones en zonas de fricción constante (ombligo, pezones) tardan entre 6 y 12 meses en consolidar un canal epitelial estable.',
  'piercing.trying.c2': 'Si se produce el embarazo durante la cicatrización temprana, las alteraciones hormonales y vasculares pueden dilatar el proceso.',
  'piercing.trying.c3': 'El empleo de materiales biocompatibles de grado implante reduce las dermatitis por contacto y la inflamación tisular.',
  'piercing.trying.q1': 'Si un piercing está cicatrizando cuando empiece el embarazo, ¿pueden las hormonas tempranas alterar la curación del tejido?',
  'piercing.trying.q2': '¿Existe algún antiséptico o producto de cuidado que deba suspenderse si sospecho que puedo estar embarazada?',
  'piercing.trying.source': 'Criterio clínico general: sin guías específicas preconcepcionales de piercing por ACOG o RCOG.',
  'piercing.first.summary': 'La inserción de un nuevo cuerpo extraño y la formación de un canal tisular en el primer trimestre suponen una demanda inmunitaria añadida en plena organogénesis.',
  'piercing.first.c1': 'La epitelización del orificio es una respuesta inflamatoria activa que requiere vigilancia inmunitaria durante la formación del embrión.',
  'piercing.first.c2': 'Las náuseas matinales, la astenia y las fluctuaciones hormonales del inicio del embarazo pueden comprometer la disciplina de higiene diaria.',
  'piercing.first.c3': 'Una bacteriemia derivada de un piercing infectado suscita seria preocupación clínica en las semanas 1–12 de gestación.',
  'piercing.first.c4': 'Los estudios profesionales de anillado rehúsan realizar perforaciones a mujeres embarazadas; consulte el calendario con su especialista.',
  'piercing.first.q1': '¿Qué riesgos conlleva para el embrión que el organismo materno esté cicatrizando un nuevo cuerpo extraño en las semanas 1–12?',
  'piercing.first.q2': 'Si aparecieran signos tempranos de infección en la zona del piercing, ¿con qué rapidez debo solicitar consulta médica?',
  'piercing.first.q3': '¿Qué manifestaciones diferencian la inflamación habitual de una infección que precise tratamiento antibiótico prescrito?',
  'piercing.first.source': 'Consenso clínico de ACOG; pautas de NHS sobre salud dérmica y embarazo.',
  'piercing.second.summary': 'En el segundo trimestre, los piercings corporales deben adaptarse a la rápida transformación anatómica. En particular, las perforaciones en el ombligo tienden a migrar por la distensión abdominal.',
  'piercing.second.c1': 'El estiramiento de la pared abdominal genera tracción hacia fuera sobre el piercing umbilical, provocando migración, adelgazamiento o expulsión.',
  'piercing.second.c2': 'La mayor vascularización de la dermis aumenta la propensión al sangrado y la reactividad de los tejidos.',
  'piercing.second.c3': 'Los piercings ya cicatrizados pueden mantenerse si no generan molestia, sustituyéndolos por piezas flexibles no metálicas si procede.',
  'piercing.second.c4': 'Para causas generales de migración ajenas a la gestación, los estudios recurren a escalas específicas de estabilidad de la joya.',
  'piercing.second.q1': '¿Cómo afectará el crecimiento del abdomen al canal de mi piercing en el ombligo durante los próximos meses?',
  'piercing.second.q2': '¿Será necesario retirar o cambiar las joyas corporales de cara a las ecografías obstétricas programadas?',
  'piercing.second.q3': '¿Qué síntomas avisan de que la joya está sometida a un exceso de tensión mecánica por el estiramiento cutáneo?',
  'piercing.second.source': 'Guía de NHS sobre piercings corporales en el embarazo; criterio clínico general.',
  'piercing.third.summary': 'Los equipos de obstetricia desaconsejan realizar nuevas perforaciones corporales en el tercer trimestre ante la proximidad del parto y las normativas hospitalarias sobre cuerpos extraños.',
  'piercing.third.c1': 'Los protocolos hospitalarios exigen la retirada de piezas metálicas antes de intervenciones, cesáreas o electrocirugía para evitar quemaduras.',
  'piercing.third.c2': 'Un canal de piercing reciente y no cicatrizado cerca del parto constituye una vía de entrada de bacterias totalmente prescindible.',
  'piercing.third.c3': 'La retención hidrostática y los continuos cambios posturales generan roces, presión e inflamación en perforaciones recientes.',
  'piercing.third.q1': '¿Cuál es la política específica de su centro hospitalario sobre joyas corporales durante el parto o una cesárea no prevista?',
  'piercing.third.q2': 'Si tengo un piercing consolidado que deseo conservar, ¿se permite usar retenedores flexibles no metálicos en paritorio?',
  'piercing.third.source': 'Protocolos clínicos de NHS y RCOG para parto, quirófanos y unidades de maternidad.',
  'piercing.breastfeeding.summary': 'Los piercings en el pezón durante la lactancia inciden directamente en los conductos galactóforos, el agarre del bebé y el riesgo de mastitis. Otros piercings siguen las pautas de curación habituales.',
  'piercing.breastfeeding.c1': 'Una perforación reciente en el pezón deja una herida contigua a los conductos lácteos, elevando el riesgo de galactoforitis, mastitis y abscesos.',
  'piercing.breastfeeding.c2': 'Conservar la joya puesta durante la toma entraña peligro inminente de asfixia o aspiración para el bebé y dificulta la succión.',
  'piercing.breastfeeding.c3': 'En perforaciones de otras zonas corporales, la prioridad es mantener la salud materna y evitar infecciones que requieran fármacos incompatibles.',
  'piercing.breastfeeding.q1': '¿Qué riesgos de mastitis u obstrucción de conductos existen al dar el pecho teniendo perforaciones en los pezones?',
  'piercing.breastfeeding.q2': 'Si me realizo un piercing en otra zona, ¿qué antisépticos locales y antibióticos resultan plenamente seguros durante la lactancia?',
  'piercing.breastfeeding.source': 'Directrices de la OMS sobre alimentación infantil y salud materna; pautas de NHS sobre lactancia.',
  'earlobe.trying.summary': 'La perforación del lóbulo presenta escasa vascularización y una superficie de herida muy reducida. Una técnica estéril rigurosa, instrumental en autoclave y joyería biocompatible son las bases fundamentales.',
  'earlobe.trying.c1': 'El tejido del lóbulo cicatriza con relativa rapidez (generalmente entre 6 y 8 semanas) en comparación con el cartílago.',
  'earlobe.trying.c2': 'La limpieza periódica con suero salino estéril previene la colonización bacteriana superficial.',
  'earlobe.trying.c3': 'Los metales biocompatibles previenen la sensibilización al níquel y las reacciones alérgicas de contacto.',
  'earlobe.trying.q1': '¿Existen precauciones médicas generales para perforaciones menores si estoy intentando concebir?',
  'earlobe.trying.q2': '¿Es el suero salino estéril la pauta recomendada para la correcta cicatrización del lóbulo?',
  'earlobe.trying.source': 'Criterio clínico general: perfil de riesgo del procedimiento muy reducido.',
  'earlobe.first.summary': 'Aunque el lóbulo implica un riesgo sistémico mínimo, cualquier perforación electiva en el primer trimestre aconseja extremar la asepsia y la constancia en los cuidados.',
  'earlobe.first.c1': 'Las complicaciones en el lóbulo rara vez tienen repercusión general, pero evitar focos bacterianos innecesarios en plena organogénesis es elemental.',
  'earlobe.first.c2': 'El cansancio o las náuseas del primer trimestre pueden inducir al descuido de la limpieza salina diaria.',
  'earlobe.first.c3': 'Elija un estudio profesional que emplee aguja hueca estéril y material esterilizado en autoclave en lugar de pistolas de perforación.',
  'earlobe.first.q1': '¿Es clínicamente desaconsejable realizar una perforación en el lóbulo en el primer trimestre siguiendo estrictos protocolos estériles?',
  'earlobe.first.q2': '¿Qué medidas debo adoptar si el lóbulo se enrojece, desprende calor o duele al tacto?',
  'earlobe.first.source': 'Criterio clínico general: bajo perfil de riesgo con la prudencia debida en el primer trimestre.',
  'earlobe.second.summary': 'La perforación del lóbulo en el segundo trimestre presenta escasas objeciones médicas si se realiza en un estudio cualificado con instrumental estéril y materiales biocompatibles.',
  'earlobe.second.c1': 'El segundo trimestre suele ser el periodo de mayor bienestar físico y estabilidad inmunológica del embarazo.',
  'earlobe.second.c2': 'Dos limpiezas diarias con solución salina estéril bastan habitualmente para evitar infecciones locales superficiales.',
  'earlobe.second.c3': 'La joyería de titanio grado implante previene la aparición de dermatitis por contacto.',
  'earlobe.second.q1': '¿Existe algún inconveniente clínico para hacerme una perforación en el lóbulo en esta etapa de mi gestación?',
  'earlobe.second.q2': '¿Qué composición de joya me aconseja para descartar reacciones dérmicas de hipersensibilidad?',
  'earlobe.second.source': 'Criterio clínico general: práctica médica consolidada para intervenciones locales menores.',
  'earlobe.third.summary': 'Las perforaciones de lóbulo en el tercer trimestre conllevan escasa carga sistémica, pero conviene informarse con antelación de las normas hospitalarias sobre joyas en paritorio.',
  'earlobe.third.c1': 'Si el parto se produce antes de completar las 6–8 semanas de cicatrización, la obligación hospitalaria de retirar joyas cerrará el orificio.',
  'earlobe.third.c2': 'Las normas de seguridad electroquirúrgica en quirófano ante una cesárea imprevista exigen despojarse de metales conductores.',
  'earlobe.third.q1': '¿Me exigirán quitarme los pendientes recién hechos en la sala de dilatación, paritorio o si hiciera falta una cesárea?',
  'earlobe.third.q2': 'En caso de cesárea urgente, ¿se autorizan retenedores plásticos o es forzoso retirar cualquier pieza?',
  'earlobe.third.source': 'Políticas hospitalarias de NHS sobre joyería en salas de parto y plantas de hospitalización.',
  'earlobe.breastfeeding.summary': 'La perforación del lóbulo durante la lactancia tiene un impacto sistémico y sobre la leche inapreciable. La higiene elemental y evitar enganchones al coger al bebé son las pautas clave.',
  'earlobe.breastfeeding.c1': 'La cicatrización del lóbulo no influye en la prolactina, la estructura mamaria ni la calidad de la leche.',
  'earlobe.breastfeeding.c2': 'Conforme el bebé crece, tiende a agarrar los pendientes; se recomienda utilizar piezas pequeñas, lisas y bien ajustadas.',
  'earlobe.breastfeeding.c3': 'Aplique suero salino estéril dos veces al día hasta la consolidación definitiva del orificio.',
  'earlobe.breastfeeding.q1': '¿Existe alguna contraindicación médica entre hacerse un piercing en el lóbulo y amamantar?',
  'earlobe.breastfeeding.q2': '¿Qué pautas de desinfección seguras para la piel del recién nacido me recomienda durante la curación?',
  'earlobe.breastfeeding.source': 'Criterio clínico general: perfil de riesgo sistémico inapreciable.',
  'pmu.trying.summary': 'El maquillaje permanente asocia la implantación dérmica de pigmento con anestésicos tópicos (como lidocaína). Conviene coordinar los tiempos de las sesiones antes de iniciar la concepción.',
  'pmu.trying.c1': 'Los anestésicos tópicos aplicados sobre piel erosionada se absorben parcialmente hacia el torrente circulatorio materno.',
  'pmu.trying.c2': 'Los pigmentos conformes con el Reglamento (UE) 2020/2081 prescinden de tóxicos, pero faltan estudios farmacocinéticos en gestación temprana.',
  'pmu.trying.c3': 'La programación del retoque obligatorio (tras 6–8 semanas) debe prever la posibilidad de haber quedado embarazada entre sesiones.',
  'pmu.trying.q1': '¿Con qué antelación respecto a la búsqueda de embarazo convendría finalizar tratamientos de pigmentación facial con anestesia tópica?',
  'pmu.trying.q2': '¿Qué implicaciones tendría la sesión de repaso si me quedo embarazada entre la primera y la segunda cita?',
  'pmu.trying.source': 'Recomendaciones de ACOG sobre procedimientos estéticos; Reglamento (UE) 2020/2081.',
  'pmu.first.summary': 'El maquillaje permanente en el primer trimestre combina la entrada de pigmento en la dermis y la absorción de anestésicos locales en la fase más vulnerable de la organogénesis.',
  'pmu.first.c1': 'Los anestésicos tópicos (lidocaína, prilocaína, tetracaína) pasan a la sangre; su aplicación con fines puramente estéticos se evita en estas semanas.',
  'pmu.first.c2': 'Las alteraciones hormonales del inicio del embarazo modifican la secreción sebácea, afectando a la fijación y uniformidad del pigmento.',
  'pmu.first.c3': 'Los profesionales acreditados de micropigmentación no tratan a clientas en el primer trimestre; concierte las fechas con su médico.',
  'pmu.first.q1': '¿Cuál es el criterio clínico sobre el uso de cremas anestésicas locales (lidocaína/EMLA) durante el primer trimestre?',
  'pmu.first.q2': '¿En qué medida el influjo hormonal temprano condiciona la cicatrización y el riesgo de manchas (hiperpigmentación posinflamatoria)?',
  'pmu.first.source': 'Dictamen del comité de ACOG sobre intervenciones estéticas electivas; guías clínicas de RCOG.',
  'pmu.second.summary': 'En el segundo trimestre, la absorción del anestésico y las alteraciones pigmentarias de la piel (cloasma / máscara del embarazo) son temas centrales de asesoramiento.',
  'pmu.second.c1': 'El estímulo hormonal sobre los melanocitos hace que el microblading o delineado labial pueda curar con tonos irregulares o manchas dérmicas.',
  'pmu.second.c2': 'El empleo de preparados anestésicos locales sigue requiriendo la autorización expresa de su equipo obstétrico.',
  'pmu.second.c3': 'La hiperemia del rostro favorece microhemorragias que pueden expulsar parte del pigmento implantado durante el trazo.',
  'pmu.second.q1': '¿Puede la tendencia al melasma propia del embarazo hacer que el maquillaje permanente cicatrice a parches o con tonos desiguales?',
  'pmu.second.q2': '¿Considera admisible su consulta el uso de anestésico tópico de lidocaína para intervenciones estéticas faciales en el segundo trimestre?',
  'pmu.second.source': 'Criterio clínico general; recomendaciones de la British Association of Dermatologists sobre estética en embarazo.',
  'pmu.third.summary': 'En el tercer trimestre, los tratamientos de micropigmentación se posponen de manera generalizada debido al uso de anestésicos, el edema facial y la incomodidad postural.',
  'pmu.third.c1': 'La hinchazón del rostro altera la simetría y tensión natural de cejas y labios, originando asimetrías al desaparecer el edema posparto.',
  'pmu.third.c2': 'Permanecer tendida en la camilla más de dos horas puede ocluir la vena cava inferior y desencadenar mareos y síncopes.',
  'pmu.third.c3': 'Prescindir de agresiones cutáneas innecesarias e infecciones potenciales en fechas próximas al alumbramiento es norma de prudencia.',
  'pmu.third.q1': '¿Hasta qué punto el edema facial de final de gestación puede distorsionar la precisión del trazo en cejas o labios?',
  'pmu.third.q2': 'Si surgiera una reacción alérgica o inflamatoria inesperada poco antes de dar a luz, ¿qué medicación podría administrarse con seguridad?',
  'pmu.third.source': 'Criterio clínico general: aplazamiento de procedimientos cosméticos electivos en el tercer trimestre.',
  'pmu.breastfeeding.summary': 'En la lactancia, el maquillaje permanente plantea la posible excreción de anestésicos tópicos a la leche y la prevención estricta de infecciones locales.',
  'pmu.breastfeeding.c1': 'La lidocaína absorbida por vía dérmica es escasa, pero pueden pasar cantidades residuales a la leche; conviene coordinar los horarios de las tomas.',
  'pmu.breastfeeding.c2': 'Las partículas de pigmento quedan depositadas en la dermis y los ganglios regionales, sin constancia de excreción láctea.',
  'pmu.breastfeeding.c3': 'La falta de descanso y el reajuste endocrino pueden lentificar la regeneración epitelial de las cejas tratadas.',
  'pmu.breastfeeding.q1': '¿Cuántas horas después de la aplicación de crema de lidocaína en cejas o labios es conveniente esperar antes de dar el pecho?',
  'pmu.breastfeeding.q2': '¿Qué bálsamos y limpiadores son compatibles con el contacto estrecho con el recién nacido durante la curación?',
  'pmu.breastfeeding.source': 'Pautas de NHS sobre anestésicos locales y lactancia materna; criterio clínico general.',
  'removal.trying.summary': 'La eliminación con láser fragmenta la tinta en nanopartículas que eliminan los macrófagos, el sistema linfático y los riñones. Planifique el calendario respecto al intento de embarazo.',
  'removal.trying.c1': 'La desintegración térmica mantiene en circulación metabolitos de degradación y mediadores inflamatorios durante varias semanas.',
  'removal.trying.c2': 'El comportamiento biológico y el posible paso transplacentario de estas nanopartículas en las primeras fases gestacionales no están estudiados.',
  'removal.trying.c3': 'Los centros de láser sugieren concluir las tandas o pausar el tratamiento con suficiente margen antes de iniciar la búsqueda activa.',
  'removal.trying.q1': '¿Cuánto tiempo necesita el organismo para eliminar completamente los restos de pigmento tras una sesión de láser?',
  'removal.trying.q2': '¿Aconseja poner en pausa las sesiones de borrado con láser mientras estemos buscando activamente el embarazo?',
  'removal.trying.source': 'Guías sobre láser de la British Association of Dermatologists; criterio clínico general.',
  'removal.first.summary': 'La eliminación con láser en el primer trimestre introduce nanopartículas de tinta en la circulación y genera intenso estrés térmico e inflamatorio en plena organogénesis.',
  'removal.first.c1': 'La fototermólisis descompone pigmentos en fragmentos microscópicos que se incorporan a los canales linfáticos y vasculares.',
  'removal.first.c2': 'La inocuidad para el embrión de partículas de tinta circulantes en las semanas 1–12 no ha sido demostrada por la ciencia médica.',
  'removal.first.c3': 'Las altas dosis de pomadas anestésicas o anestesia infiltrativa habituales en el láser suponen una exposición farmacológica evitable.',
  'removal.first.c4': 'Los dermatólogos y clínicas especializadas posponen sistemáticamente el láser hasta después del parto; coordine los plazos con su médico.',
  'removal.first.q1': '¿Por qué razones médicas específicas desaconsejan los dermatólogos las sesiones de láser para tatuajes en el primer trimestre?',
  'removal.first.q2': 'Si me sometí a una sesión de láser sin saber que estaba embarazada, ¿qué aspectos debemos monitorizar en la próxima ecografía?',
  'removal.first.source': 'Recomendaciones de ACOG sobre equipos láser en gestantes; consenso en farmacología clínica.',
  'removal.second.summary': 'La eliminación con láser en el segundo trimestre sigue siendo motivo de consulta preferente, al persistir la dispersión de partículas y el riesgo de discromías.',
  'removal.second.c1': 'La mayor síntesis de melanina durante la gestación incrementa el riesgo de hiperpigmentación posinflamatoria o despigmentaciones irreversibles.',
  'removal.second.c2': 'El drenaje y depuración linfática de los pigmentos fragmentados se prolonga entre 6 y 8 semanas tras cada aplicación.',
  'removal.second.c3': 'Suspender las sesiones hasta completar el periodo posparto es el criterio unánime entre especialistas en láser y obstetras.',
  'removal.second.q1': '¿Aumenta la mayor pigmentación cutánea del embarazo el riesgo de que el láser deje cicatrices o manchas permanentes?',
  'removal.second.q2': '¿Existe algún inconveniente en dejar el tatuaje a medio borrar hasta después de haber dado a luz?',
  'removal.second.source': 'British Association of Dermatologists; criterio clínico general.',
  'removal.third.summary': 'El láser en etapas avanzadas de la gestación añade fatiga fisiológica, inflamación y heridas potenciales en fechas muy próximas al parto.',
  'removal.third.c1': 'Ampollas, quemaduras superficiales y riesgo de infección por láser suponen una complicación innecesaria al final del embarazo.',
  'removal.third.c2': 'La respuesta inflamatoria general del cuerpo puede ocasionar picos febriles o taquicardia materna.',
  'removal.third.c3': 'La postura requerida durante el procedimiento resulta difícil de sobrellevar con el volumen del tercer trimestre.',
  'removal.third.q1': '¿Qué complicaciones traería consigo una quemadura o ampolla de láser si el parto se desencadenara de forma imprevista?',
  'removal.third.q2': '¿Cuánto tiempo después del alumbramiento suele ser prudente reanudar las sesiones de eliminación de tatuajes?',
  'removal.third.source': 'Criterio clínico general: aplazamiento de procedimientos láser voluntarios al final del embarazo.',
  'removal.breastfeeding.summary': 'Durante la lactancia, las nanopartículas de pigmento captadas por los macrófagos pasan al sistema linfático. La transferencia de subproductos a la leche no está dilucidada.',
  'removal.breastfeeding.c1': 'La investigación sobre si las partículas de tinta liberadas por el láser pasan a la leche materna es muy escasa; por eso se suele aconsejar prudencia.',
  'removal.breastfeeding.c2': 'Las intervenciones de borrado emplean anestésicos locales en concentraciones notables que exigen prudencia durante la lactancia.',
  'removal.breastfeeding.c3': 'Diferir el tratamiento hasta concluir el destete erradica cualquier duda sobre exposición a sustancias químicas en el lactante.',
  'removal.breastfeeding.q1': '¿Pueden las micropartículas de tinta trituradas por el láser transferirse a la leche que toma mi bebé?',
  'removal.breastfeeding.q2': '¿Recomienda esperar a que el niño esté completamente destetado antes de continuar con la eliminación del tatuaje?',
  'removal.breastfeeding.source': 'Guías clínicas de RCOG y NHS sobre medicación y procedimientos en la lactancia; criterio clínico general.'
,

  // Additional Improvements (Features 1-7)
  'nav.mode_reference': 'Referencia de procedimiento individual',
  'nav.mode_compare': 'Matriz comparativa de procedimientos',
  'nav.mode_hospital': 'Protocolo hospitalario y paritorio',
  'nav.mode_navel': 'Guía de expansión tisular umbilical',
  'nav.mode_nipple': 'Guía de pezón y lactancia',
  'nav.mode_postpartum': 'Cronología de reanudación posparto',
  'nav.mode_triage': 'Triaje de complicaciones',
  'worksheet.custom_notes_title': 'Notas personales y puntos de consulta',
  'worksheet.custom_notes_desc': 'Añada preguntas personales, antecedentes de sus piercings o temas específicos que desee tratar con su matrona o médico antes de imprimir:',
  'worksheet.custom_notes_placeholder': 'Escriba aquí sus preguntas o notas (p. ej., "Consultar sobre mi piercing en el ombligo durante el parto", "Mencionar cesárea programada en semana 39")...',
  'worksheet.print_client_notes_title': 'Notas de la paciente y dudas específicas para la consulta:',
  'compare.title': 'Matriz comparativa de procedimientos en paralelo',
  'compare.subtitle': 'Seleccione dos o tres combinaciones de procedimiento y etapa para contrastar sus niveles de prioridad, justificación fisiológica y puntos clave de conversación.',
  'compare.col_heading': 'Escenario {num}',
  'compare.select_proc': 'Seleccionar procedimiento',
  'compare.select_stage': 'Seleccionar etapa',
  'compare.clear_btn': 'Restablecer matriz',
  'compare.prompt': 'Seleccione un procedimiento y una etapa en al menos dos columnas para comparar las consideraciones clínicas en paralelo.',
  'compare.priority_label': 'Prioridad de conversación',
  'compare.rationale_label': 'Justificación clínica',
  'compare.considerations_label': 'Factores fisiológicos clave',
  'compare.source_label': 'Base de evidencia',
  'hospital.title': 'Planificador de normativas de joyería en hospital y paritorio',
  'hospital.subtitle': 'Lista de verificación estructurada para revisar en la consulta prenatal de la semana 36 acerca de electrocauterio, parto urgente y contacto neonatal.',
  'hospital.intro': 'Los protocolos hospitalarios sobre joyería corporal durante el parto varían según la maternidad, los criterios quirúrgicos y los servicios de salud. Revise estos aspectos con su matrona o ginecólogo antes de la semana 36.',
  'hospital.item1_title': 'Equipos de electrocauterio y diatermia monopolar',
  'hospital.item1_desc': 'En caso de cesárea urgente o no programada, el bisturí eléctrico monopolar genera un circuito eléctrico a través del cuerpo. La joyería metálica conductora puede ocasionar riesgo de quemadura térmica si se sitúa en la trayectoria hacia la placa neutra dispersiva.',
  'hospital.item2_title': 'Vía aérea de emergencia y manejo anestésico',
  'hospital.item2_desc': 'Los piercings en labios, lengua, boca y nariz presentan riesgos de obstrucción o desplazamiento accidental durante la intubación endotraqueal o ventilación con mascarilla si se precisa anestesia general.',
  'hospital.item3_title': 'Joyería pélvica, genital y perineal',
  'hospital.item3_desc': 'Los piercings genitales y perineales suponen un riesgo directo de desgarro y laceración durante el expulsivo y la distensión tisular, e interfieren con episiotomías o suturas perineales. Las salas de parto exigen su retirada antes del parto activo.',
  'hospital.item4_title': 'Contacto cutáneo neonatal y manipulación',
  'hospital.item4_desc': 'La joyería en rostro, cuello, muñecas o torso puede causar abrasiones involuntarias en la delicada piel del recién nacido durante el contacto piel con piel inmediato y las primeras tomas.',
  'hospital.item5_title': 'Resonancia magnética diagnóstica (RMN)',
  'hospital.item5_desc': 'Si se requiere una prueba urgente de imagen por resonancia en el posparto, los elementos metálicos ferromagnéticos presentan riesgos graves por efecto proyectil, torsión tisular y calentamiento.',
  'hospital.action_title': 'Puntos de acción para la consulta con la matrona en semana 36',
  'hospital.action1': 'Consulte las directrices específicas de paritorio y quirófano del hospital donde tenga prevista la atención del parto.',
  'hospital.action2': 'Solicite que se anote en su cartilla de maternidad si se autorizan retenedores inertes no metálicos en zonas no quirúrgicas.',
  'hospital.action3': 'Planifique la retirada de piezas orales, faciales, genitales y abdominales antes de la fecha probable de parto, o acuda a un estudio profesional si los cierres están duros.',
  'hospital.product_note_title': 'Nota de producto: Retenedores inertes no metálicos',
  'hospital.product_note_body': 'Los retenedores no conductores y sin metal fabricados en copolímero aleatorio PP-R u otros polímeros no conductores de grado implante no conducen corriente eléctrica y no son ferromagnéticos. Se usan a menudo para mantener abierta una perforación consolidada cuando el protocolo del centro admite retenedores no metálicos. Las normas de quirófano y anestesia siguen bajo la autoridad del equipo médico y quirúrgico presente, que tiene la última palabra sobre cualquier cuerpo extraño.',
  'navel.title': 'Guía visual de expansión tisular umbilical',
  'navel.subtitle': 'Modelos didácticos de tensión mecánica que ilustran la expansión de la pared abdominal, las fuerzas de cizallamiento y la deformación del canal según el trimestre.',
  'navel.intro': 'A medida que el útero grávido expande la pared abdominal anterior, el canal umbilical experimenta intensas tensiones direccionales. Esta guía visual explica cómo varían estas fuerzas a lo largo del embarazo.',
  'navel.t1_title': 'Preconcepción / Primer trimestre: Geometría en reposo',
  'navel.t1_desc': 'El grosor tisular es el habitual con mínima tensión. El canal del piercing se sitúa vertical en el tejido adiposo subcutáneo sin alteración de la pared abdominal.',
  'navel.t2_title': 'Segundo trimestre: Expansión lateral y longitudinal',
  'navel.t2_desc': 'El aumento del volumen uterino aplana la depresión del ombligo. La piel experimenta una tensión continua en varias direcciones que ejerce cizallamiento contra los extremos rígidos de la joya.',
  'navel.t3_title': 'Tercer trimestre: Fuerte cizallamiento mecánico y eversión',
  'navel.t3_desc': 'La distensión máxima puede provocar la eversión del ombligo. La presión dérmica adelgaza el tejido sobre la joya rígida, incrementando notablemente el riesgo de migración, desgarro o cicatrices hipertróficas.',
  'navel.stress_points_title': 'Factores clave de tensión mecánica para comentar con su profesional de salud',
  'navel.stress_p1': 'El adelgazamiento perceptible de la piel entre los orificios indica exceso de tensión y aconseja retirar la joya para evitar el desgarro del canal.',
  'navel.stress_p2': 'Las barras curvas metálicas rígidas no pueden acompañar la curvatura del abdomen, lo que genera marcas por presión y decúbito en los puntos de apoyo de las bolas.',
  'navel.stress_p3': 'El aplanamiento del ombligo elimina el hueco protector, exponiendo la pieza al roce constante con pretinas elásticas y fajas premamá.',
  'navel.sizing_link_prefix': 'Para consultar dimensiones técnicas de joyería, calibres y longitudes de barra, consulte el',
  'navel.sizing_link_text': 'Visualizador de tallas de joyería',
  'navel.sizing_link_suffix': '. No intente dilataciones ni cambios de grosor sin supervisión durante la gestación; consulte cualquier cambio con su anillador profesional y su matrona.',
  'navel.product_note_title': 'Nota de producto: Retenedores umbilicales flexibles',
  'navel.product_note_body': 'Patrick Poli, creador de la joyería corporal BioFlex®, eligió para ella un copolímero aleatorio PP-R flexible que cede ante los cambios anatómicos sin crear puntos de presión rígidos. El PP-R se moldea por inyección en una sola pieza monolítica; no es PTFE (que debe mecanizarse a partir de barras extruidas y tiende a perder orientación). Si la tensión dérmica genera rojez, molestia o adelgazamiento, retire la joya de inmediato, con independencia del material.',
  'nipple.title': 'Guía de piercings en el pezón y cronograma de lactancia',
  'nipple.subtitle': 'Pautas sobre la mecánica de la lactancia, la retirada de la joya antes de cada toma, la seguridad respiratoria del lactante y cuándo acudir a una especialista en lactancia.',
  'nipple.intro': 'Los piercings en el pezón requieren precauciones especiales durante la gestación y la lactancia para proteger la alimentación del bebé y evitar complicaciones físicas.',
  'nipple.choking_title': 'Seguridad vital de la vía aérea del bebé: retirar la joya antes de cada toma o extracción',
  'nipple.choking_desc': 'Cualquier pieza, bola o retenedor que permanezca en el pezón supone un peligro inminente y letal de atragantamiento, aspiración pulmonar y asfixia para el bebé durante la toma o la extracción con sacaleches. Es obligatorio retirar toda la joyería antes de amamantar.',
  'nipple.mech_title': 'Fisiología de la lactancia y flujo de leche',
  'nipple.mech_desc': 'El pezón humano presenta entre 4 y 18 orificios galactóforos individuales. Los canales de piercings consolidados suelen cruzar o bordear varios de ellos. Durante la bajada de la leche, esta puede fluir tanto por los poros naturales como por los orificios del piercing.',
  'nipple.latch_title': 'Eficacia del agarre y sellado del paladar',
  'nipple.latch_desc': 'El tejido cicatricial de perforaciones previas puede modificar la elasticidad y la protrusión natural del pezón cuando el bebé intenta llevarlo profundamente hacia el paladar blando, pudiendo causar dolor materno o agarre superficial.',
  'nipple.consult_title': 'Apoyo de matrona o consultora de lactancia',
  'nipple.consult_desc': 'No intente realizar una autoevaluación de la permeabilidad de los conductos o de la densidad de las cicatrices. Si nota dolor, retención láctea o dificultades de agarre, acuda a una consulta presencial con una consultora certificada IBCLC o su matrona.',
  'nipple.infection_title': 'Riesgo de mastitis por reintroducción frecuente',
  'nipple.infection_desc': 'Colocar y quitar la joya de forma repetida en un canal irritado entre tomas introduce la flora de la piel en los senos galactóforos, aumentando de forma considerable el riesgo de mastitis infecciosa.',
  'postpartum.title': 'Cronología didáctica de reanudación posparto',
  'postpartum.subtitle': 'Puntos de referencia fisiológicos sobre cicatrización tisular, recuperación inmunitaria, normalización hemodinámica y estabilización hormonal antes de planear nuevos tratamientos corporales.',
  'postpartum.intro': 'La reanudación de tatuajes o piercings tras el nacimiento depende de la evolución fisiológica individual y no de una fecha fija en el calendario. Dialogue sobre estos periodos con su médico o matrona en la revisión posparto.',
  'postpartum.p1_title': 'Semanas 0–6: Puerperio inmediato y recuperación hemodinámica',
  'postpartum.p1_desc': 'La involución uterina, la eliminación de loquios, la curación de la zona de inserción placentaria y las variaciones de volumen sanguíneo son prioritarias. El sistema inmunitario sale de la modulación gestacional; no se aconsejan agresiones cutáneas electivas.',
  'postpartum.p2_title': 'Semanas 6–12: Consulta de revisión posparto y consolidación tisular',
  'postpartum.p2_desc': 'Tras la revisión clínica habitual de las 6 semanas, las heridas perineales o cicatrices de cesárea se encuentran consolidadas. Sin embargo, el cansancio, la alteración del descanso y la instauración de la lactancia siguen modulando la respuesta inmunológica.',
  'postpartum.p3_title': 'Meses 3–6: Normalización hormonal y remodelación dérmica',
  'postpartum.p3_desc': 'La hiperlaxitud de los tejidos conectivos provocada por la relaxina disminuye progresivamente. En personas que no amamantan, la barrera cutánea, el tono vascular y los parámetros inmunitarios basales vuelven a sus niveles habituales.',
  'postpartum.p4_title': 'Periodo de lactancia hasta el destete: Consideraciones continuas',
  'postpartum.p4_desc': 'Mientras se mantenga la lactancia materna, los niveles elevados de prolactina inhiben la ovulación regular y modifican la hidratación de la piel. La eliminación láser y los pigmentos cosméticos exigen cautela respecto a la seguridad del bebé.',
  'postpartum.closing_title': 'Recomendación sobre plazos clínicos',
  'postpartum.closing_desc': 'La rapidez de recuperación varía según las circunstancias del parto, la pérdida hemática, el estado nutricional y las pautas de alimentación infantil. Concrete siempre los plazos directamente con su ginecólogo, médico de familia o matrona antes de reservar.',
  'triage.title': 'Referencia de triaje de complicaciones para piercings y tatuajes existentes',
  'triage.subtitle': 'Diferenciación clínica entre irritación mecánica por estiramiento tisular y síntomas de alarma que precisan valoración médica urgente.',
  'triage.intro': 'Esta referencia ayuda a distinguir molestias físicas leves de infecciones clínicas graves, locales o sistémicas. No constituye diagnóstico ni autorización facultativa; cualquier anomalía debe ser evaluada clínicamente.',
  'triage.cat_mechanical': 'Irritación mecánica (tensión física localizada)',
  'triage.cat_medical': 'Signos que requieren consulta médica urgente',
  'triage.mech_sym1': 'Eritema leve (enrojecimiento) limitado exclusivamente al borde de los orificios, sin aumento del calor circundante.',
  'triage.mech_sym2': 'Ausencia total de fiebre, escalofríos, dolores generales o malestar sistémico.',
  'triage.mech_sym3': 'Líquido seroso linfático claro o amarillento tenue que se seca formando costras finas, sin olor fétido.',
  'triage.mech_sym4': 'Molestia que se alivia en cuanto se retira la presión de cinturillas, gomas o joyas rígidas.',
  'triage.mech_action': 'Pauta: Usar prendas holgadas, no manipular sin lavar las manos y acudir al anillador para ajustar el tamaño de la joya. Si los signos persisten o aumentan, contacte con su matrona o médico.',
  'triage.med_sym1': 'Eritema extenso, caliente y pulsátil que avanza más allá de los márgenes del piercing o tatuaje.',
  'triage.med_sym2': 'Signos sistémicos con fiebre (>38 °C), escalofríos, pulso acelerado o afectación del estado general.',
  'triage.med_sym3': 'Exudado purulento espeso, opaco, amarillento o verdoso, con olor claramente desagradable.',
  'triage.med_sym4': 'Líneas rojas lineales (linfangitis) que se extienden desde la herida hacia los ganglios linfáticos regionales.',
  'triage.med_sym5': 'Adelgazamiento acelerado de la piel con riesgo inminente de desgarro completo del canal o expulsión.',
  'triage.med_action': 'Pauta: Acuda sin demora a su ginecólogo, médico de cabecera, matrona o servicio de urgencias médicas. No espere a una consulta en el estudio.'
};

const I18N_NL = {
  // Search Bar & Filter Strings
  'search.placeholder': 'Zoek klinische richtlijnen, onderwerpen of materialen (bijv. piercing, navel, mastitis)...',
  'search.clear_btn': 'Zoekopdracht wissen',
  'search.filter_all': 'Alle onderwerpen',
  'search.filter_procedures': 'Ingrepen',
  'search.filter_guidelines': 'Gespecialiseerde richtlijnen',
  'search.results_count': '{count} klinisch(e) onderwerp(en) gevonden voor "{query}"',
  'search.no_results_title': 'Geen klinische onderwerpen gevonden',
  'search.no_results_desc': 'Probeer te zoeken op type ingreep (tatoeage, piercing, permanente make-up), fase (eerste trimester, borstvoeding) of specifiek aandachtspunt (navelspanning, luchtweg van de zuigeling, mastitis, infectiesymptomen).',
  'search.item_category_procedure': 'Veiligheidsreferentie per ingreep',
  'search.item_category_guideline': 'Gespecialiseerde klinische richtlijnen',
  'search.view_action': 'Onderwerp bekijken',

  'meta.title': 'Veiligheidswijzer lichaamsversiering bij zwangerschap en borstvoeding | Poli International',
  'meta.description': 'Een onderbouwde klinische leidraad voor het gesprek met uw verloskundige of arts over tatoeages, piercings en permanente make-up tijdens zwangerschap en lactatie.',
  'app.badge': 'Klinische en studio-referentie',
  'app.title': 'Veiligheidswijzer ingrepen: zwangerschap en borstvoeding',
  'app.subtitle': 'Een onderbouwde klinische leidraad om het gesprek aan te gaan met uw verloskundige of arts over tatoeages, piercings en permanente make-up.',
  'app.lang_label': 'Taal:',
  'lang.en': 'Engels',
  'lang.de': 'Duits',
  'lang.fr': 'Frans',
  'lang.es': 'Spaans',
  'lang.it': 'Italiaans',
  'lang.nl': 'Nederlands',
  'lang.pt': 'Portugees',
  'form.procedure_label': 'Type ingreep',
  'form.stage_label': 'Huidige fase',
  'form.procedure_placeholder': '- Selecteer ingreep -',
  'form.stage_placeholder': '- Selecteer fase -',
  'proc.tattoo': 'Nieuwe tatoeage',
  'proc.piercing': 'Lichaamspiercing (geen oorlel)',
  'proc.earlobe': 'Oorlelpiercing',
  'proc.pmu': 'Permanente make-up / microblading',
  'proc.removal': 'Laser-tatoeageverwijdering',
  'stage.trying': 'Kinderwens (preconceptiefase)',
  'stage.first': 'Eerste trimester (week 1–12)',
  'stage.second': 'Tweede trimester (week 13–26)',
  'stage.third': 'Derde trimester (week 27–40)',
  'stage.breastfeeding': 'Borstvoeding / postpartumperiode',
  'prompt.title': 'Selecteer een ingreep en een fase',
  'prompt.body': 'Kies hierboven een vorm van lichaamsversiering en uw huidige zwangerschaps- of voedingsfase om klinische gesprekspunten en een afdrukbare vragenlijst te bekijken.',
  'tier1.tag': 'Prioriteitsniveau 1: tijdig overleg',
  'tier1.title': 'Hoge prioriteit: overleg tijdig met uw verloskundige of arts',
  'tier1.sub': 'Actieve fysiologische processen, embryonale ontwikkeling of weefseloprekking vereisen een voorafgaande klinische beoordeling voordat u een afspraak plant.',
  'tier2.tag': 'Prioriteitsniveau 2: gepland consult',
  'tier2.title': 'Bespreek tijdens uw reguliere controle met verloskundige of arts',
  'tier2.sub': 'Maternale fysiologische veranderingen beïnvloeden de genezing of plaatsing; breng dit ter sprake tijdens uw eerstvolgende prenatale afspraak.',
  'tier3.tag': 'Prioriteitsniveau 3: standaard aandachtspunt',
  'tier3.title': 'Standaard consult met uw verloskundige of arts',
  'tier3.sub': 'Lagere complexiteit van de ingreep; stem standaard steriele werkwijzen en nazorgprotocollen af met uw zorgverlener.',
  'section.summary': 'Klinische onderbouwing',
  'section.considerations': 'Klinische en fysiologische aandachtspunten',
  'section.checklist': 'Vragen voor uw verloskundige of arts',
  'section.checklist_intro': 'Vink de vragen aan die u wilt voorleggen aan uw verloskundige, gynaecoloog of huisarts tijdens uw volgende afspraak:',
  'section.provenance': 'Herkomst en wetenschappelijke basis',
  'section.authority_title': 'Deskundigheid en autoriteit van uw zorgteam',
  'section.authority_body': 'Dit hulpmiddel biedt algemene klinische oriëntatie. Uw eigen arts of verloskundige kent uw persoonlijke voorgeschiedenis, bloedwaarden en zwangerschapsbeloop en is als enige bevoegd om beslissingen te nemen over uw behandeling.',
  'section.product_note_title': 'Productopmerking: materialen voor piercingsieraden',
  'section.sibling_title': 'Aanverwante klinische hulpmiddelen',
  'section.print_btn': 'Vragenlijst afdrukken',
  'section.meta_reviewed': 'Laatste beoordeling:',
  'section.meta_date': 'September 2026',
  'section.meta_source': 'Basis van klinische herziening:',
  'provenance.eu_instrument_prefix': 'Officieel wetgevend instrument:',
  'provenance.eu_instrument_name': 'Verordening (EU) 2020/2081 van de Commissie (REACH-bijlage XVII: inkten voor tatoeages en permanente make-up)',
  'print.doc_title': 'Gespreksleidraad voor verloskundige of arts',
  'print.patient_date': 'Datum:',
  'print.notes_title': 'Aantekeningen van het consult en vervolgafspraken',
  'print.patient_copy': 'Exemplaar voor de cliënt',
  'print.clinician_signature': 'Handtekening zorgverlener: _______________________',
  'print.gestational_age': 'Zwangerschapsduur / Status: ________________',
  'print.footer_note': 'Dit document dient uitsluitend ter ondersteuning van het prenatale of postpartale overleg. Het vervangt geen individuele medische beoordeling door uw verloskundige of arts.',
  'product_note.body': 'Patrick Poli, bedenker van BioFlex® body jewelry, koos er een PP-R (polypropyleen random copolymeer) voor, zodat het sieraad meebeweegt met anatomische veranderingen. Flexibele materialen zoals BioFlex® body jewelry en metalen van implantaatkwaliteit zijn weinig reactieve opties om met een professionele piercer te bespreken bij bestaande of genezende piercings tijdens de zwangerschap. PP-R wordt als één naadloos geheel spuitgegoten; het is geen PTFE (dat uit geëxtrudeerde staf wordt verspaand). Overleg de materiaalkeuze voor piercingsieraden tijdens de zwangerschap altijd met uw professionele piercer en uw verloskundige of arts.',
  'disclaimer.title': 'Belangrijk klinisch voorbehoud:',
  'disclaimer.body': 'Dit hulpmiddel heeft een uitsluitend informatief doel en vervangt op geen enkele wijze professioneel medisch advies, diagnostiek of behandeling. Bespreek elke gewenste ingreep op het gebied van lichaamsversiering altijd vooraf met uw verloskundige, gynaecoloog of arts.',
  'sibling.med_title': 'Medicatie-interactiechecker',
  'sibling.med_desc': 'Controleer mogelijke wisselwerkingen tussen voorgeschreven medicijnen, gangbare behandelingen en ingrepen voor lichaamsversiering.',
  'sibling.migration_title': 'Risicowijzer piercingmigratie en -afstoting',
  'sibling.migration_desc': 'Beoordeel mechanische weefselspanning, plaatsingsdiepte en beweeglijkheid die bepalend zijn voor de stabiliteit van het sieraad.',
  'tattoo.trying.summary': 'Tatoeage-inktdeeltjes zetten zich af in de lederhuid en de regionale lymfeklieren. Hoewel teratogene effecten vóór de conceptie niet zijn aangetoond, vereist een eventuele bacteriële huidinfectie tijdens de vroege innestelingsfase zorgvuldig medisch overleg.',
  'tattoo.trying.c1': 'Er zijn zeer weinig klinische gegevens over systemische verspreiding van inktnanodeeltjes tijdens het conceptievenster.',
  'tattoo.trying.c2': 'Een ernstige huidinfectie die antibiotica vereist tijdens de innesteling beperkt de veilige medicamenteuze behandelopties.',
  'tattoo.trying.c3': 'De samenstelling van inkt varieert; inkten conform Verordening (EU) 2020/2081 beperken meer dan 4.000 gevaarlijke stoffen, aromatische aminen en zware metalen.',
  'tattoo.trying.c4': 'Het plannen van een sessie buiten de vruchtbare dagen voorkomt dat een onopgemerkte vroege zwangerschap samenvalt met het acute genezingsproces.',
  'tattoo.trying.q1': 'Als ik kort na het zetten van een tatoeage zwanger word, kan de wondgenezing dan invloed hebben op de innesteling van het embryo?',
  'tattoo.trying.q2': 'Welke antibioticagroepen moeten worden vermeden bij huidinfecties tijdens een actieve kinderwens?',
  'tattoo.trying.q3': 'Zijn mijn vaccinaties tegen tetanus en hepatitis B up-to-date voorafgaand aan ingrepen die de huidbarrière doorbreken?',
  'tattoo.trying.source': 'Algemeen klinisch beleid: er zijn geen specifieke preconceptuele richtlijnen gepubliceerd door ACOG of RCOG.',
  'tattoo.first.summary': 'Het eerste trimester (week 1–12) is de cruciale periode van foetale orgaanvorming. Elke systemische maternale infectie, aanzienlijke koorts of ontstekingsreactie brengt in deze fase duidelijke klinische risico’s met zich mee.',
  'tattoo.first.c1': 'De orgaanaanleg vindt hoofdzakelijk plaats tussen week 3 en 8 van de zwangerschap, wat een optimale fysiologische stabiliteit van de moeder vereist.',
  'tattoo.first.c2': 'Ingrepen die de huidbarrière doorbreken brengen risico’s met zich mee op bacteriële infecties (stafylokokken, streptokokken) en bloedoverdraagbare ziekteverwekkers.',
  'tattoo.first.c3': 'Zwangerschapsmisselijkheid, braken en hormonale veranderingen kunnen de therapietrouw bij de wondhygiëne bemoeilijken en het herstel vertragen.',
  'tattoo.first.c4': 'Professionele tatoeagestudio’s tatoeëren uit hoofde van hun risicobeheer geen zwangere cliënten; bespreek de timing met uw arts.',
  'tattoo.first.q1': 'Wat zijn de mogelijke gevolgen voor de embryonale ontwikkeling van een bacteriële huidinfectie opgelopen in het eerste trimester?',
  'tattoo.first.q2': 'Hoe beïnvloeden de vroege hormonale veranderingen de wondgenezing en welke alarmsymptomen vereisen direct contact?',
  'tattoo.first.q3': 'Als ik een tatoeage heb laten zetten vlak voordat ik ontdekte zwanger te zijn, op welke specifieke signalen moeten we dan letten?',
  'tattoo.first.source': 'ACOG-richtlijnen voor huidaandoeningen tijdens de zwangerschap; NHS-aanbevelingen over tatoeages bij zwangerschap.',
  'tattoo.second.summary': 'In het tweede trimester (week 13–26) is de primaire organogenese voltooid, maar de toename van het circulerend bloedvolume, weefseloprekking en vochtretentie beïnvloeden het comfort en het eindresultaat.',
  'tattoo.second.c1': 'De toename van het maternale bloedvolume en vaatverwijding in de huid kunnen leiden tot heviger bloeden en meer blauwe plekken.',
  'tattoo.second.c2': 'Snelle uitzetting van de huid op buik, heupen, borsten en onderrug kan het ontwerp en de inktlijnen blijvend vervormen.',
  'tattoo.second.c3': 'Langdurig stilzitten of plat op de rug liggen tijdens lange sessies kan het vena-cava-syndroom (lage bloeddruk en duizeligheid) uitlokken.',
  'tattoo.second.c4': 'Elke huidinfectie in het tweede trimester vereist directe behandeling met zwangerschapsveilige antibiotica.',
  'tattoo.second.q1': 'Vormen mijn bloeddruk, bloedsuikerwaarden of verhoogde huidgevoeligheid aanvullende risicofactoren?',
  'tattoo.second.q2': 'Welke lichaamszones moeten absoluut worden vermeden met het oog op verdere oprekking van de huid?',
  'tattoo.second.q3': 'In welke mate kan het toegenomen bloedvolume tijdens de sessie zorgen voor meer bloedverlies en een trager herstel?',
  'tattoo.second.source': 'NHS-aanbevelingen over lichaamsversiering bij zwangerschap; algemene klinische praktijk.',
  'tattoo.third.summary': 'In het derde trimester (week 27–40) maken houdingsongemakken, vochtophoping en de naderende bevalling nieuwe tatoeages tot een vermijdbaar risico op medische complicaties.',
  'tattoo.third.c1': 'Een open wond of een acute infectie op het moment van de bevalling bemoeilijkt de verloskundige zorgverlening en opname.',
  'tattoo.third.c2': 'Plat op de rug liggen drukt door het gewicht van de baarmoeder de onderste holle ader dicht, wat leidt tot acute bloeddrukdalingen.',
  'tattoo.third.c3': 'Weefseloedeem en strakke huidspanning maken het lastig om de naalddiepte en pigmentverzadiging nauwkeurig te beheersen.',
  'tattoo.third.c4': 'Aanhoudende pijn en fysieke belasting kunnen leiden tot een verhoogde hartslag en uitputting vlak voor de uitgerekende datum.',
  'tattoo.third.q1': 'Welke complicaties kan een genezende tatoeage veroorzaken bij opname op de verlosafdeling?',
  'tattoo.third.q2': 'Hoe beïnvloedt vochtretentie in het derde trimester de inktverdeling en de vatbaarheid voor infecties?',
  'tattoo.third.q3': 'Als er vlak voor de bevalling een huidinfectie optreedt, welke gevolgen heeft dat voor infusen of medicatie?',
  'tattoo.third.source': 'NHS-richtlijnen voor voorbereiding op de bevalling; algemene klinische consensus.',
  'tattoo.breastfeeding.summary': 'Tatoeage-inkten blijven opgesloten in de lederhuid of worden opgenomen door macrofagen; er is geen bewijs dat intacte inktdeeltjes in de moedermelk overgaan. Preventie van maternale infecties staat klinisch voorop.',
  'tattoo.breastfeeding.c1': 'Intacte pigmentdeeltjes zijn te groot om in de moedermelk terecht te komen, maar over mogelijke afbraakproducten is weinig bekend.',
  'tattoo.breastfeeding.c2': 'Een eventuele bacteriële infectie vereist antibiotica die veilig gecombineerd kunnen worden met het geven van borstvoeding.',
  'tattoo.breastfeeding.c3': 'Slaapgebrek en herstel na de bevalling kunnen de afweer verminderen en de genezing van de huid vertragen.',
  'tattoo.breastfeeding.c4': 'Professionele tatoeëerders raden aan te wachten tot de borstvoeding en het lichamelijk herstel goed zijn gestabiliseerd.',
  'tattoo.breastfeeding.q1': 'Welke antibiotica zijn veilig voor de baby mocht er een bacteriële huidinfectie optreden?',
  'tattoo.breastfeeding.q2': 'Welke herstelperiode na de bevalling adviseert u voordat ik een cosmetische huidprocedure onderga?',
  'tattoo.breastfeeding.q3': 'Zijn er bij mijn baby specifieke omstandigheden (zoals vroeggeboorte of geelzucht) die extra voorzichtigheid vereisen?',
  'tattoo.breastfeeding.source': 'NHS-voorlichting over borstvoeding en lichaamsversiering; algemeen klinisch beleid.',
  'piercing.trying.summary': 'Een nieuwe lichaamspiercing voorafgaand aan een zwangerschap vergt maanden van ongestoorde genezing. Het vormen van een stabiel fistelkanaal vraagt energie van het immuunsysteem; houd rekening met komende lichaamsveranderingen.',
  'piercing.trying.c1': 'Piercings op plekken met veel wrijving (navel, tepels) hebben 6 tot 12 maanden nodig voor volledige weefselgenezing.',
  'piercing.trying.c2': 'Als er kort na het piercen een zwangerschap ontstaat, kunnen hormonale veranderingen en verhoogde doorbloeding de genezing vertragen.',
  'piercing.trying.c3': 'Het gebruik van biocompatibele materialen van implantaatkwaliteit vermindert contactallergieën en ontstekingsreacties.',
  'piercing.trying.q1': 'Als een piercing nog aan het genezen is wanneer ik zwanger word, kunnen vroege hormoonschommelingen dat proces dan verstoren?',
  'piercing.trying.q2': 'Zijn er bepaalde verzorgingsproducten of ontsmettingsmiddelen die ik moet vermijden als ik vermoed zwanger te zijn?',
  'piercing.trying.source': 'Algemene klinische praktijk: geen specifieke preconceptuele piercingrichtlijnen van ACOG of RCOG.',
  'piercing.first.summary': 'Het inbrengen van een nieuw vreemd voorwerp en de vorming van een fistelkanaal in het eerste trimester betekenen een extra belasting voor het immuunsysteem tijdens de kwetsbare organogenese.',
  'piercing.first.c1': 'Het vormen van een piercingkanaal is een actieve ontstekingsreactie die afweercapaciteit vraagt tijdens de vroege embryonale ontwikkeling.',
  'piercing.first.c2': 'Ochtendmisselijkheid, vermoeidheid en hormonale schommelingen kunnen de dagelijkse verzorging en hygiëne bemoeilijken.',
  'piercing.first.c3': 'Een bacteriële bloedbaaninfectie door een ontstoken piercing vormt een aanzienlijk klinisch risico in week 1–12 van de zwangerschap.',
  'piercing.first.c4': 'Professionele piercingstudio’s piercen geen zwangere cliënten; stem de gewenste timing af met uw verloskundige of arts.',
  'piercing.first.q1': 'Welke risico’s brengt een genezend vreemd voorwerp in het lichaam met zich mee voor het embryo in week 1–12?',
  'piercing.first.q2': 'Als er tekenen van een beginnende infectie rond de piercing ontstaan, hoe snel moet ik dan contact opnemen met de praktijk?',
  'piercing.first.q3': 'Welke symptomen onderscheiden normale weefselirritatie van een bacteriële infectie die behandeling vereist?',
  'piercing.first.source': 'ACOG-consensusrichtlijnen; NHS-voorlichting over huidgezondheid tijdens de zwangerschap.',
  'piercing.second.summary': 'In het tweede trimester moeten bestaande lichaamspiercings worden aangepast aan de snelle anatomische veranderingen. Vooral navelpiercings staan onder druk door oprekking van de buikwand.',
  'piercing.second.c1': 'Het uitzetten van de buik veroorzaakt opwaartse en voorwaartse spanning op het navelkanaal, wat kan leiden tot migratie, weefselverdunning of uitstoting.',
  'piercing.second.c2': 'De toegenomen vaatrijkdom van de huid vergroot de kans op nabloedingen en weefselgevoeligheid bij manipulatie.',
  'piercing.second.c3': 'Reeds genezen piercings kunnen behouden blijven zolang ze niet knellen, eventueel door over te stappen op flexibele niet-metalen retainers.',
  'piercing.second.c4': 'Voor algemene oorzaken van afstoting buiten de zwangerschap hanteren studio’s gevalideerde risicoschalen voor sieraadstabiliteit.',
  'piercing.second.q1': 'Welke invloed heeft de groeiende buik de komende maanden op het weefsel rond mijn navelpiercing?',
  'piercing.second.q2': 'Moeten piercingsieraden worden verwijderd of gewisseld voor geplande prenatale echo’s?',
  'piercing.second.q3': 'Welke signalen wijzen erop dat het sieraad te veel mechanische spanning ondervindt door het oprekken van de huid?',
  'piercing.second.source': 'NHS-richtlijn over lichaamspiercings tijdens de zwangerschap; algemene klinische praktijk.',
  'piercing.third.summary': 'Verloskundigen en gynaecologen raden nieuwe piercings in het derde trimester af vanwege de naderende bevalling en ziekenhuisprotocollen rondom vreemde voorwerpen.',
  'piercing.third.c1': 'Ziekenhuisprotocollen vereisen het verwijderen van metalen sieraden vóór operaties, spoedkeizersneden of diathermie om brandwonden te voorkomen.',
  'piercing.third.c2': 'Een verse, niet-genezen piercingwond vlak voor de bevalling vormt een onnodige toegangspoort voor bacteriën.',
  'piercing.third.c3': 'Vochtophoping en veranderde slaaphoudingen zorgen voor extra druk, wrijving en irritatie op recente piercings.',
  'piercing.third.q1': 'Wat is het specifieke beleid van uw geboortecentrum of ziekenhuis ten aanzien van piercingsieraden tijdens de partus of een onverwachte keizersnede?',
  'piercing.third.q2': 'Als ik een genezen piercing wil behouden, zijn flexibele niet-metalen retainers dan toegestaan op de verloskamer?',
  'piercing.third.source': 'Klinische protocollen van NHS en RCOG voor verloskamers, operatiekamers en kraamafdelingen.',
  'piercing.breastfeeding.summary': 'Tepelpiercings tijdens de borstvoedingsperiode hebben directe gevolgen voor de melkkanalen, het aanhappen van de baby en het risico op borstontsteking. Voor andere piercings gelden standaard genezingsprincipes.',
  'piercing.breastfeeding.c1': 'Een nieuwe tepelpiercing creëert een open wond direct naast de melkklieren, wat het risico op bacteriële galactoforitis, mastitis en abcessen sterk verhoogt.',
  'piercing.breastfeeding.c2': 'Aanwezigheid van het sieraad tijdens het voeden vormt een direct verstikkingsgevaar voor de baby en belemmert een effectief aanhappen.',
  'piercing.breastfeeding.c3': 'Bij piercings op andere lichaamslocaties is het vermijden van infecties die borstvoedingsonveilige medicatie vereisen het voornaamste aandachtspunt.',
  'piercing.breastfeeding.q1': 'Welke risico’s op borstontsteking of verstopte melkkanalen bestaan er bij borstvoeding met tepelpiercings?',
  'piercing.breastfeeding.q2': 'Als ik een piercing laat zetten op een andere plek, welke wondverzorgingsmiddelen en eventuele antibiotica zijn dan veilig tijdens de lactatie?',
  'piercing.breastfeeding.source': 'Richtlijnen van de WHO over zuigelingenvoeding; NHS-aanbevelingen voor borstvoeding.',
  'earlobe.trying.summary': 'Oorlelpiercings betreffen weefsel met een beperkte wondomvang en een overzichtelijke genezing. Een strikt steriele werkwijze, een autoclaaf en biocompatibele sieraden vormen het fundament.',
  'earlobe.trying.c1': 'Het weefsel van de oorlel geneest relatief snel (doorgaans binnen 6 tot 8 weken) vergeleken met kraakbeen.',
  'earlobe.trying.c2': 'Regelmatige reiniging met steriele fysiologische zoutoplossing voorkomt oppervlakkige bacteriële ophoping.',
  'earlobe.trying.c3': 'Biocompatibele metalen voorkomen nikkelallergie en contacteczeem.',
  'earlobe.trying.q1': 'Zijn er algemene medische bezwaren tegen een eenvoudige oorlelpiercing tijdens een actieve kinderwens?',
  'earlobe.trying.q2': 'Is steriel fysiologisch zout de aanbevolen verzorgingsmethode voor een ongecompliceerde genezing?',
  'earlobe.trying.source': 'Algemene klinische praktijk: zeer laag ingreepgebonden risicoprofiel.',
  'earlobe.first.summary': 'Hoewel een oorlelpiercing een minimaal systemisch risico heeft, vereist elke niet-medische ingreep in het eerste trimester strikte steriliteit en consequente verzorging.',
  'earlobe.first.c1': 'Complicaties aan de oorlel zijn zelden ernstig, maar het vermijden van onnodige ontstekingshaarden tijdens de orgaanvorming blijft het uitgangspunt.',
  'earlobe.first.c2': 'Vermoeidheid en zwangerschapsklachten kunnen ertoe leiden dat de dagelijkse spoeling met zoutoplossing wordt overgeslagen.',
  'earlobe.first.c3': 'Kies voor een professionele studio die werkt met steriele holle naalden en een autoclaaf, en vermijd doordruksystemen of piercingpistolen.',
  'earlobe.first.q1': 'Zijn er medische bezwaren tegen een oorlelpiercing in het eerste trimester mits uitgevoerd onder strikt steriele omstandigheden?',
  'earlobe.first.q2': 'Welke stappen moet ik ondernemen als de oorlel rood, warm of pijnlijk wordt?',
  'earlobe.first.source': 'Algemene klinische praktijk: laag risicoprofiel met passende terughoudendheid in het eerste trimester.',
  'earlobe.second.summary': 'Het piercen van de oorlel in het tweede trimester kent weinig medische bezwaren wanneer dit gebeurt in een erkende studio met steriele instrumenten en biocompatibele materialen.',
  'earlobe.second.c1': 'Het tweede trimester is over het algemeen de meest stabiele en energieke periode van de zwangerschap.',
  'earlobe.second.c2': 'Tweemaal daags spoelen met steriel fysiologisch zout volstaat in de regel om oppervlakkige bacteriële infecties te voorkomen.',
  'earlobe.second.c3': 'Sieraden van implantaatwaardig titanium sluiten allergische reacties nagenoeg uit.',
  'earlobe.second.q1': 'Ziet u vanuit verloskundig oogpunt enig bezwaar tegen het laten piercen van mijn oorlellen in deze fase?',
  'earlobe.second.q2': 'Welke materiaalsamenstelling voor het sieraad raadt u aan om overgevoeligheidsreacties te voorkomen?',
  'earlobe.second.source': 'Algemene klinische praktijk: gevestigde medische werkwijze voor kleine lokale ingrepen.',
  'earlobe.third.summary': 'Oorlelpiercings in het derde trimester belasten het lichaam nauwelijks, maar houd rekening met ziekenhuisvoorschriften omtrent sieraden op de verloskamer.',
  'earlobe.third.c1': 'Als de bevalling plaatsvindt voordat de genezingstijd van 6–8 weken voorbij is, kan het verplichte uitdoen van het sieraad leiden tot dichtgroeien.',
  'earlobe.third.c2': 'Bij een ongeplande keizersnede moeten alle metalen voorwerpen worden uitgedaan ter voorkoming van brandwonden door elektrochirurgische apparatuur.',
  'earlobe.third.q1': 'Moeten pas gezette oorbellen worden uitgedaan op de verloskamer of bij een eventuele keizersnede?',
  'earlobe.third.q2': 'Mogen bij een onverhoopte operatie kunststof retainers in de oorlellen blijven zitten?',
  'earlobe.third.source': 'NHS-ziekenhuisprotocollen voor sieraden op kraam- en operatieafdelingen.',
  'earlobe.breastfeeding.summary': 'Een oorlelpiercing tijdens de borstvoedingsperiode heeft geen invloed op de melkproductie of de samenstelling ervan. Goede basishygiëne en alertheid op grijpende babyhandjes zijn het belangrijkst.',
  'earlobe.breastfeeding.c1': 'Het genezen van een oorlel heeft geen enkele invloed op prolactine, het borstweefsel of de melkkwaliteit.',
  'earlobe.breastfeeding.c2': 'Oudere baby’s grijpen naar glinsterende voorwerpen; kies voor kleine, gladde en goed aansluitende sieraden om uitscheuren te voorkomen.',
  'earlobe.breastfeeding.c3': 'Gebruik tweemaal daags een steriele zoutoplossing totdat het gaatje stabiel is genezen.',
  'earlobe.breastfeeding.q1': 'Zijn er medische bezwaren tegen het laten prikken van oorlellen zolang ik borstvoeding geef?',
  'earlobe.breastfeeding.q2': 'Welke milde verzorgingsproducten zijn veilig voor contact met de tere babyhuid tijdens de genezingsperiode?',
  'earlobe.breastfeeding.source': 'Algemene klinische consensus: verwaarloosbaar systemisch risicoprofiel.',
  'pmu.trying.summary': 'Permanente make-up combineert het inbrengen van pigment in de lederhuid met lokale verdovingsmiddelen (zoals lidocaïne). Stem de planning van de behandelingen af vóór een actieve zwangerschapswens.',
  'pmu.trying.c1': 'Lokale verdovingscrèmes die op een beschadigde huid worden aangebracht, worden gedeeltelijk opgenomen in de maternale bloedbaan.',
  'pmu.trying.c2': 'Pigmenten conform Verordening (EU) 2020/2081 bevatten geen schadelijke bestanddelen, maar farmacokinetische gegevens over de vroege zwangerschap ontbreken.',
  'pmu.trying.c3': 'Bij de planning van de noodzakelijke nabehandeling (na 6–8 weken) moet rekening worden gehouden met een mogelijke tussenliggende zwangerschap.',
  'pmu.trying.q1': 'Hoeveel tijd vóór het proberen zwanger te worden kan ik gezichtsbehandelingen met verdovende crèmes het beste afronden?',
  'pmu.trying.q2': 'Wat gebeurt er met het behandelschema als ik tussen de eerste sessie en de nabehandeling zwanger raak?',
  'pmu.trying.source': 'ACOG-aanbevelingen voor cosmetische procedures; Verordening (EU) 2020/2081.',
  'pmu.first.summary': 'Permanente make-up in het eerste trimester combineert pigmentinbreng in de huid met de systemische opname van lokale verdoving tijdens de meest kwetsbare fase van de foetale orgaanvorming.',
  'pmu.first.c1': 'Lokale anesthetica (lidocaïne, prilocaïne, tetracaïne) passeren de placenta; cosmetisch gebruik wordt in deze weken nadrukkelijk ontraden.',
  'pmu.first.c2': 'Hormoonschommelingen in het vroege stadium veranderen de talgproductie en huidstructuur, wat kan leiden tot vlekkige of slechte pigmentopname.',
  'pmu.first.c3': 'Gecertificeerde PMU-specialisten behandelen geen cliënten in het eerste trimester; overleg over een veilig behandelmoment met uw arts.',
  'pmu.first.q1': 'Wat is het medische standpunt over het gebruik van verdovende crèmes (lidocaïne/EMLA) in het eerste trimester?',
  'pmu.first.q2': 'In welke mate beïnvloeden vroege zwangerschapshormonen het pigmentbehoud en het risico op pigmentvlekken (hyperpigmentatie)?',
  'pmu.first.source': 'ACOG-commissieadvies over electieve ingrepen; klinische richtlijnen van RCOG.',
  'pmu.second.summary': 'In het tweede trimester vormen de opname van verdovingsmiddelen en zwangerschapsgerelateerde pigmentveranderingen van de huid (zwangerschapsmasker / melasma) belangrijke aandachtspunten.',
  'pmu.second.c1': 'Door verhoogde melanineactiviteit kunnen microblading of lip-pigmentaties ongelijkmatig helen of donkere vlekken achterlaten.',
  'pmu.second.c2': 'Het gebruik van lokale verdovingsmiddelen vereist nog steeds uitdrukkelijke instemming van uw behandelend verloskundige of arts.',
  'pmu.second.c3': 'Verhoogde doorbloeding van het gelaat leidt sneller tot microbloedingen, waardoor pigment tijdens het zetten kan worden weggespoeld.',
  'pmu.second.q1': 'Kan de verhoogde aanleg voor melasma ertoe leiden dat permanente make-up vlekkerig of ongelijkmatig geneest?',
  'pmu.second.q2': 'Acht u het gebruik van een lidocaïnecrème voor een cosmetische gezichtsbehandeling verantwoord in het tweede trimester?',
  'pmu.second.source': 'Algemene klinische praktijk; adviezen van de British Association of Dermatologists over esthetiek bij zwangerschap.',
  'pmu.third.summary': 'In het derde trimester worden PMU-behandelingen over het algemeen uitgesteld vanwege verdovingsmiddelen, vochtretentie in het gezicht en het ongemak van lang stilliggen.',
  'pmu.third.c1': 'Zwelling in het gezicht vervormt de natuurlijke lijnen van wenkbrauwen en lippen, wat na het verdwijnen van het oedeem kan resulteren in asymmetrie.',
  'pmu.third.c2': 'Langer dan twee uur stil op de rug liggen kan de onderste holle ader dichtdrukken en leiden tot duizeligheid en flauwvallen.',
  'pmu.third.c3': 'Het vermijden van onnodige huidtrauma’s en infectierisico’s vlak voor de bevalling is een verstandige klinische maatregel.',
  'pmu.third.q1': 'In hoeverre kan vochtophoping in het gezicht de precisie en symmetrie van wenkbrauw- of lipbehandelingen verstoren?',
  'pmu.third.q2': 'Welke veilige behandelopties zijn er als er kort voor de bevalling een ontstekingsreactie of infectie optreedt?',
  'pmu.third.source': 'Algemene klinische praktijk: uitstel van electieve cosmetische ingrepen in het derde trimester.',
  'pmu.breastfeeding.summary': 'Tijdens de borstvoedingsperiode vraagt permanente make-up aandacht voor de eventuele uitscheiding van verdovingsmiddelen in de moedermelk en strikte infectiepreventie.',
  'pmu.breastfeeding.c1': 'Lidocaïne die via de huid wordt opgenomen is minimaal, maar sporen kunnen in de melk terechtkomen; stem het tijdstip van voeden hierop af.',
  'pmu.breastfeeding.c2': 'Pigmentdeeltjes blijven lokaal in de huid en lymfeklieren en worden voor zover bekend niet via de moedermelk uitgescheiden.',
  'pmu.breastfeeding.c3': 'Slaaptekort en hormonale herstelprocessen kunnen het herstel van de behandelde gezichtshuid vertragen.',
  'pmu.breastfeeding.q1': 'Hoeveel uur na het aanbrengen van een lidocaïnecrème kan ik het beste wachten voordat ik weer borstvoeding geef?',
  'pmu.breastfeeding.q2': 'Welke verzorgende crèmes zijn veilig bij nauw huidcontact met mijn pasgeboren baby tijdens de genezing?',
  'pmu.breastfeeding.source': 'NHS-richtlijnen voor lokale verdoving bij borstvoeding; algemene klinische praktijk.',
  'removal.trying.summary': 'Bij laserbehandeling worden inktdeeltjes afgebroken tot nanodeeltjes die worden opgeruimd door macrofagen, het lymfestelsel en de nieren. Stem de behandelreeks af op uw zwangerschapswens.',
  'removal.trying.c1': 'Door de thermische afbraak circuleren er gedurende enkele weken afvalstoffen en ontstekingsmediatoren in het lichaam.',
  'removal.trying.c2': 'Het biologische gedrag en de eventuele placentapassage van deze nanodeeltjes in een vroeg stadium zijn wetenschappelijk onvoldoende onderzocht.',
  'removal.trying.c3': 'Laserklinieken adviseren om behandelsessies af te ronden of tijdelijk te staken ruim voordat u actief probeert zwanger te worden.',
  'removal.trying.q1': 'Hoeveel tijd heeft het lichaam nodig om afgebroken inktdeeltjes volledig af te voeren na een lasersessie?',
  'removal.trying.q2': 'Adviseert u om de laserbehandelingen te pauzeren zolang wij actief proberen een zwangerschap tot stand te brengen?',
  'removal.trying.source': 'Laserrichtlijnen van de British Association of Dermatologists; algemeen klinisch beleid.',
  'removal.first.summary': 'Laser-tatoeageverwijdering in het eerste trimester brengt afgebroken inktdeeltjes in de circulatie en veroorzaakt aanzienlijke thermische stress en ontstekingsreacties tijdens de orgaanvorming.',
  'removal.first.c1': 'Fotothermolyse vergruist pigmenten tot microscopische deeltjes die via lymfe- en bloedvaten worden afgevoerd.',
  'removal.first.c2': 'De veiligheid van circulerende pigmentdeeltjes voor het embryo in week 1–12 is medisch niet vastgesteld.',
  'removal.first.c3': 'De hoge doseringen verdovingscrème of injecties die bij laserbehandelingen nodig zijn, vormen een onnodige medicamenteuze belasting.',
  'removal.first.c4': 'Dermatologen en laserklinieken stellen behandelingen standaard uit tot na de bevalling; overleg de termijn met uw arts.',
  'removal.first.q1': 'Om welke specifieke medische redenen ontraden dermatologen lasersessies voor tatoeageverwijdering in het eerste trimester?',
  'removal.first.q2': 'Als ik een lasersessie heb ondergaan toen ik nog niet wist dat ik zwanger was, waar moeten we dan extra op letten bij de echo?',
  'removal.first.source': 'ACOG-aanbevelingen over laserapparatuur bij zwangerschap; klinische farmacologie.',
  'removal.second.summary': 'Tatoeageverwijdering met laser blijft ook in het tweede trimester een belangrijk gesprekspunt vanwege circulerende deeltjes en het grote risico op blijvende pigmentverstoringen.',
  'removal.second.c1': 'Verhoogde melanineproductie tijdens de zwangerschap vergroot de kans op postinflammatoire hyperpigmentatie of blijvende lichte vlekken.',
  'removal.second.c2': 'De afvoer van afgebroken pigmenten via het lymfestelsel duurt na elke sessie doorgaans 6 tot 8 weken.',
  'removal.second.c3': 'Het tijdelijk staken van de behandelingen tot na de bevalling is het eensgezinde advies van laserspecialisten en verloskundigen.',
  'removal.second.q1': 'Vergroot de veranderde huidpigmentatie tijdens de zwangerschap de kans op littekens of blijvende verkleuringen door de laser?',
  'removal.second.q2': 'Kan het kwaad om een half verwijderde tatoeage enkele maanden te laten rusten tot na de bevalling?',
  'removal.second.source': 'British Association of Dermatologists; algemene klinische consensus.',
  'removal.third.summary': 'Laserbehandelingen in de laatste fase van de zwangerschap veroorzaken onnodige fysieke belasting, ontstekingsreacties en potentiële wondjes vlak voor de bevalling.',
  'removal.third.c1': 'Blaarvorming, oppervlakkige brandwonden en infectierisico’s door de laser vormen een ongewenste complicatie zo dicht bij de bevalling.',
  'removal.third.c2': 'De systemische ontstekingsreactie van het lichaam kan leiden tot koortspieken of een verhoogde maternale hartslag.',
  'removal.third.c3': 'De vereiste lichaamshouding tijdens de behandeling is met een hoogzwangere buik bijzonder belastend en ongemakkelijk.',
  'removal.third.q1': 'Welke complicaties kunnen brandwonden of blaren door een laserbehandeling geven als de bevalling plotseling op gang komt?',
  'removal.third.q2': 'Hoeveel weken na de bevalling is het verstandig om de laserbehandelingen weer op te pakken?',
  'removal.third.source': 'Algemene klinische praktijk: uitstel van niet-urgente laserbehandelingen in het derde trimester.',
  'removal.breastfeeding.summary': 'Tijdens de borstvoedingsperiode komen afgebroken inktdeeltjes via macrofagen in het lymfestelsel terecht. Mogelijke overdracht van afvalstoffen naar de moedermelk is nog onvoldoende onderzocht.',
  'removal.breastfeeding.c1': 'Er is nauwelijks onderzoek naar de vraag of inktdeeltjes die bij laserverwijdering vrijkomen in moedermelk terechtkomen; daarom wordt meestal voorzichtigheid aangeraden.',
  'removal.breastfeeding.c2': 'Bij laserbehandelingen worden vaak aanzienlijke hoeveelheden lokale verdoving gebruikt, wat voorzichtigheid vereist bij borstvoeding.',
  'removal.breastfeeding.c3': 'Wachten tot na het afronden van de borstvoedingsperiode sluit elke mogelijke blootstelling van de zuigeling aan vrijkomende stoffen uit.',
  'removal.breastfeeding.q1': 'Kunnen microscopisch kleine inktdeeltjes die vrijkomen bij het laseren in de moedermelk terechtkomen?',
  'removal.breastfeeding.q2': 'Is het verstandig om te wachten met verdere lasersessies totdat mijn kind volledig van de borst is?',
  'removal.breastfeeding.source': 'RCOG- en NHS-richtlijnen over medicatie en ingrepen tijdens de lactatie; algemeen klinisch beleid.'
,

  // Additional Improvements (Features 1-7)
  'nav.mode_reference': 'Referentie per individuele procedure',
  'nav.mode_compare': 'Vergelijkingsmatrix van procedures',
  'nav.mode_hospital': 'Ziekenhuis- & verloskamerbeleid',
  'nav.mode_navel': 'Gids voor navelweefseluitrekking',
  'nav.mode_nipple': 'Gids tepels & borstvoeding',
  'nav.mode_postpartum': 'Tijdlijn voor postpartumperiode',
  'nav.mode_triage': 'Triage van complicaties',
  'worksheet.custom_notes_title': 'Persoonlijke notities & gesprekspunten',
  'worksheet.custom_notes_desc': 'Voeg voorafgaand aan het printen uw persoonlijke vragen, gegevens over bestaande piercings of specifieke onderwerpen voor uw verloskundige of arts toe:',
  'worksheet.custom_notes_placeholder': 'Typ hier uw vragen of notities (bijv. "Navelpiercing bespreken tijdens de bevalling", "Geplande keizersnede in week 39 vermelden")...',
  'worksheet.print_client_notes_title': 'Notities van de patiënte & specifieke gesprekspunten:',
  'compare.title': 'Vergelijkingsmatrix van procedures naast elkaar',
  'compare.subtitle': 'Selecteer twee of drie combinaties van procedure en fase om gespreksurgentie, fysiologische achtergronden en klinische gesprekspunten direct te vergelijken.',
  'compare.col_heading': 'Scenario {num}',
  'compare.select_proc': 'Selecteer procedure',
  'compare.select_stage': 'Selecteer fase',
  'compare.clear_btn': 'Matrix resetten',
  'compare.prompt': 'Selecteer voor minimaal twee kolommen hierboven een procedure en fase om de klinische aspecten naast elkaar te vergelijken.',
  'compare.priority_label': 'Gespreksprioriteit',
  'compare.rationale_label': 'Klinische onderbouwing',
  'compare.considerations_label': 'Belangrijke fysiologische factoren',
  'compare.source_label': 'Onderbouwing / bronnen',
  'hospital.title': 'Planningsgids voor sieradenbeleid in ziekenhuis en verloskamer',
  'hospital.subtitle': 'Gestructureerde controlelijst voor het prenatale consult bij 36 weken omtrent elektrocauterisatie, spoedbevallingen en huidcontact met de pasgeborene.',
  'hospital.intro': 'Ziekenhuisrichtlijnen omtrent lichaamssieraden tijdens de bevalling variëren per geboortecentrum, chirurgisch protocol en zorgregio. Bespreek deze punten voorafgaand aan de 36e week met uw verloskundige of gynaecoloog.',
  'hospital.item1_title': 'Elektrocauterisatie & monopolaire diathermieapparatuur',
  'hospital.item1_desc': 'Bij een ongeplande of spoedkeizersnede creëert een monopolair elektrocauterapparaat een stroomkring door het lichaam. Geleidende metalen lichaamssieraden kunnen een lokaal risico op brandwonden vormen wanneer ze zich tussen het operatiegebied en de neutrale dispersieve aardingsplaat bevinden.',
  'hospital.item2_title': 'Luchtwegbeheer bij spoed & anesthesie',
  'hospital.item2_desc': 'Sieraden in mond, lippen, tong en neus vormen een potentieel risico op obstructie van de luchtwegen of losraken bij een spoedintubatie of kapbeademing indien algehele anesthesie noodzakelijk blijkt.',
  'hospital.item3_title': 'Bekkensieraden, genitale en perineale piercings',
  'hospital.item3_desc': 'Genitale en perineale piercings brengen directe scheur- en letselrisico\'s met zich mee tijdens de vaginale baring en weefseloprekking, en belemmeren het zetten van een episiotomie of het hechten van het perineum. Verloskamers vereisen verwijdering voor de actieve fase van de baring.',
  'hospital.item4_title': 'Huidcontact & verzorging van de pasgeborene',
  'hospital.item4_desc': 'Sieraden in het gezicht, aan de hals, polsen of romp kunnen onbedoelde schaafwondjes veroorzaken op de kwetsbare babyhuid tijdens het eerste huid-op-huidcontact en de eerste voedingen.',
  'hospital.item5_title': 'Magnetische resonantietomografie (MRI)',
  'hospital.item5_desc': 'Mocht met spoed beeldvormend onderzoek postpartum vereist zijn, dan brengt ferromagnetisch metaal ernstige risico\'s met zich mee door projectielwerking, torsie en opwarming door radiofrequente straling.',
  'hospital.action_title': 'Actiepunten voor het 36-wekenconsult bij de verloskundige',
  'hospital.action1': 'Informeer bij uw verloskundige naar het exacte beleid van de verloskamer en de operatiekamers van uw geboortelocatie.',
  'hospital.action2': 'Vraag of in uw zwangerschapsdossier genoteerd kan worden of niet-metalen inerte retainers zijn toegestaan op niet-operatieve locaties.',
  'hospital.action3': 'Plan het tijdig uitdoen van alle gezichts-, mond-, genitale en buiksieraden ruim voor de uitgerekende datum, of vraag hulp in een professionele studio bij strakke sluitingen.',
  'hospital.product_note_title': 'Productnotitie: Niet-metalen inerte retainers',
  'hospital.product_note_body': 'Niet-geleidende, metaalvrije retainers van PP-R random copolymeer of andere niet-geleidende polymeren van implantaatkwaliteit geleiden geen elektrische stroom en zijn niet ferromagnetisch. Ze worden vaak gebruikt om een bestaand piercingkanaal open te houden wanneer het ziekenhuisprotocol niet-metalen retainers toestaat. De regels in de operatiekamer en rond anesthesie blijven onder het gezag van het aanwezige medische en chirurgische team, dat het laatste woord heeft over elk vreemd voorwerp.',
  'navel.title': 'Visuele gids voor navelweefseluitrekking',
  'navel.subtitle': 'Educatieve modellen voor mechanische weefselspanning die de expansie van de buikwand, schuifkrachten en kanaalvervorming per trimester inzichtelijk maken.',
  'navel.intro': 'Wanneer de groeiende baarmoeder de voorste buikwand uitrekt, komt het navelweefsel onder aanzienlijke directionele trekkracht te staan. Deze gids laat zien hoe deze mechanische krachten tijdens de zwangerschap verschuiven.',
  'navel.t1_title': 'Preconceptie / Eerste trimester: Rustpositie van het weefsel',
  'navel.t1_desc': 'De weefseldikte is normaal met minimale spanning. Het piercingkanaal bevindt zich verticaal in ontspannen onderhuids vetweefsel zonder vervorming van de buikwand.',
  'navel.t2_title': 'Tweede trimester: Laterale en longitudinale expansie',
  'navel.t2_desc': 'Het toenemende baarmoedervolume vlakt de navelholte af. De huid ondergaat trekkrachten in meerdere richtingen, wat leidt tot schuifspanning tegen de harde uiteinden van het sieraad.',
  'navel.t3_title': 'Derde trimester: Ernstige schuifkracht en uitpuilen van de navel',
  'navel.t3_desc': 'Maximale oprekking kan ertoe leiden dat de navel naar buiten plopt. Hoge weefselspanning dunt de huid over een stug sieraad uit, wat het risico op uitstoting (migratie), uitscheuren of blijvende littekenvorming sterk verhoogt.',
  'navel.stress_points_title': 'Belangrijke mechanische stressfactoren om te bespreken met uw zorgverlener',
  'navel.stress_p1': 'Zichtbare verdunning van de huidbrug tussen de openingen duidt op overmatige spanning; het sieraad moet worden uitgenomen om inscheuren te voorkomen.',
  'navel.stress_p2': 'Stugge gebogen metalen staafjes kunnen niet meegeven met de veranderende buikronding, wat kan leiden tot drukplekjes onder de sluitkogeltjes.',
  'navel.stress_p3': 'Het verstrijken van de navelholte heft de natuurlijke bescherming op, waardoor broekbanden en steunbanden direct langs het sieraad schuren.',
  'navel.sizing_link_prefix': 'Voor technische afmetingen van sieraden, omrekeningen van draaddiktes en staaflengtes, raadpleeg de',
  'navel.sizing_link_text': 'Visualizer voor sieradenmaten',
  'navel.sizing_link_suffix': '. Voer tijdens de zwangerschap geen ongecontroleerde maatveranderingen of oprekkingen uit; overleg over elke aanpassing met uw professionele piercer en verloskundige.',
  'navel.product_note_title': 'Productnotitie: Flexibele navelretainers',
  'navel.product_note_body': 'Patrick Poli, bedenker van BioFlex® body jewelry, koos er een flexibel PP-R random copolymeer voor, dat soepel meebuigt met veranderende lichaamscontouren zonder stijve drukpunten te vormen. PP-R wordt door spuitgieten als één monolithisch geheel vervaardigd; het is geen PTFE (dat uit geëxtrudeerde staven moet worden verspaand en zijn richting kan verliezen). Wanneer weefselspanning roodheid, pijn of verdunning veroorzaakt, verwijder het sieraad dan direct, ongeacht het type materiaal.',
  'nipple.title': 'Gids tepelpiercings & borstvoedingstijdlijn',
  'nipple.subtitle': 'Informatie over de mechaniek van borstvoeding, het verwijderen van sieraden vóór elke voeding, luchtwegveiligheid van de baby en wanneer u een lactatiekundige inschakelt.',
  'nipple.intro': 'Tepelpiercings vereisen tijdens zwangerschap en lactatie zorgvuldige voorzorgsmaatregelen om de voeding van het kind te waarborgen en ernstige complicaties te vermijden.',
  'nipple.choking_title': 'Vitale luchtwegveiligheid voor de baby: sieraad verwijderen voor elke voeding of kolfbeurt',
  'nipple.choking_desc': 'Elk sieraadonderdeel, kogeltje of retainer dat in de tepel achterblijft vormt een direct en levensbedreigend risico op verstikking, aspiratie en luchtwegbelemmering voor de baby tijdens het voeden of kolven. Alle sieraden moeten volledig worden verwijderd vóór het aanleggen.',
  'nipple.mech_title': 'Fysiologie van de melkafgifte & doorstroming',
  'nipple.mech_desc': 'De menselijke tepel bevat tussen de 4 en 18 individuele melkgangopeningen. Volgroeide piercingkanalen doorkruisen of passeren vaak meerdere van deze gangen. Tijdens de toeschietreflex kan melk zowel via de natuurlijke poriën als via de openingen van het piercingkanaal naar buiten komen.',
  'nipple.latch_title': 'Aanlatchtechniek en afsluiting tegen het gehemelte',
  'nipple.latch_desc': 'Littekenweefsel van eerdere piercings kan de elasticiteit en het naar voren komen van de tepel beïnvloeden wanneer de baby de borst diep naar het zachte gehemelte toetrekt, wat kan leiden tot tepelkloven of een te oppervlakkige aanhap.',
  'nipple.consult_title': 'Begeleiding door verloskundige of lactatiekundige',
  'nipple.consult_desc': 'Probeer niet zelf de doorgankelijkheid van melkgangen of de dichtheid van littekenweefsel te beoordelen. Maak bij aanhoudende stuwing, pijn of aanlegmoeilijkheden een fysieke afspraak met een gecertificeerd lactatiekundige (IBCLC) of uw verloskundige.',
  'nipple.infection_title': 'Risico op borstontsteking (mastitis) door frequent herinbrengen',
  'nipple.infection_desc': 'Het herhaaldelijk inbrengen en uitnemen van sieraden in een geïrriteerd kanaal tussen de voedingen door brengt huidbacteriën rechtstreeks in de melkkanalen, wat het risico op infectieuze mastitis aanzienlijk vergroot.',
  'postpartum.title': 'Educatieve tijdlijn voor de postpartumperiode',
  'postpartum.subtitle': 'Fysiologische mijlpalen betreffende wondherstel, herstel van het immuunsysteem, bloedsomloopnormalisatie en hormonale stabilisatie voor het hervatten van lichaamsversiering.',
  'postpartum.intro': 'Het hervatten van electieve piercings of tatoeages na de bevalling hangt af van fysiologische herstelprocessen en niet van een vaste kalenderdatum. Bespreek deze herstelfasen tijdens uw nacontrole met uw arts of verloskundige.',
  'postpartum.p1_title': 'Weken 0–6: Vroeg kraambed & hemodynamisch herstel',
  'postpartum.p1_desc': 'Baarmoederinvolutie, lochiale uitvloed, herstel van de placenta-aanhechtingsplek en grote verschuivingen in het bloedvolume vragen alle aandacht van het lichaam. Het immuunsysteem herstelt van de zwangerschapsmodulatie; cosmetische ingrepen worden medisch afgeraden.',
  'postpartum.p2_title': 'Weken 6–12: Nacontrole & weefselconsolidatie',
  'postpartum.p2_desc': 'Na goedkeuring tijdens de nacontrole bij 6 weken zijn eventuele perineale rupturen of keizersnedelittekens doorgaans gestabiliseerd. Vermoeidheid, verstoorde nachten en de borstvoedingshormonen blijven de algemene afweer echter beïnvloeden.',
  'postpartum.p3_title': 'Maanden 3–6: Hormonale normalisatie & weefselherstructurering',
  'postpartum.p3_desc': 'De door relaxine veroorzaakte bindweefselverslapping neemt geleidelijk af. Bij vrouwen die geen borstvoeding geven, herstellen de barrièrefunctie van de huid, de vaatreactiviteit en de bloedwaarden grotendeels naar de uitgangssituatie.',
  'postpartum.p4_title': 'Duur van borstvoeding tot spenen: Blijvende aandachtspunten',
  'postpartum.p4_desc': 'Zolang borstvoeding wordt gegeven, onderdrukt een verhoogd prolactinegehalte de normale eisprong en beïnvloedt het de huidhydratatie. Laserverwijdering en cosmetische pigmenten vereisen aanhoudende terughoudendheid ter bescherming van de baby.',
  'postpartum.closing_title': 'Klinisch advies over planning',
  'postpartum.closing_desc': 'De individuele herstelsnelheid verschilt aanzienlijk naar gelang het type bevalling, bloedverlies, voedingstoestand en het voedingsschema van de baby. Stem het tijdstip van geplande procedures altijd rechtstreeks af met uw gynaecoloog, huisarts of verloskundige.',
  'triage.title': 'Triagegids voor complicaties bij bestaande piercings en tatoeages',
  'triage.subtitle': 'Klinisch onderscheid tussen mechanische irritatie door weefseluitrekking en alarmsymptomen die directe medische beoordeling door arts of verloskundige vereisen.',
  'triage.intro': 'Deze gids helpt om milde fysieke spanning te onderscheiden van ernstige lokale of systemische infecties. Dit instrument geeft geen medische diagnose of toestemming; alle afwijkingen vereisen deskundige controle.',
  'triage.cat_mechanical': 'Mechanische irritatie (lokale fysieke spanning)',
  'triage.cat_medical': 'Symptomen die dringende medische beoordeling vereisen',
  'triage.mech_sym1': 'Milde roodheid die strikt beperkt blijft tot de directe randen van het piercingkanaal, zonder uitstralende warmte.',
  'triage.mech_sym2': 'Volledige afwezigheid van koorts, koude rillingen, spierpijn of algemeen ziektegevoel.',
  'triage.mech_sym3': 'Helder of licht strogeel sereus wondvocht (lymfe) dat opdroogt tot korstjes, zonder onaangename geur.',
  'triage.mech_sym4': 'Ongemak dat snel vermindert zodra knellende kleding, elastiek of een stug sieraad wordt ontlast.',
  'triage.mech_action': 'Advies: Verminder druk van kleding, raak de plek uitsluitend aan met gewassen handen en raadpleeg uw piercer voor een passend sieraad. Neem contact op met uw verloskundige of arts als klachten aanhouden.',
  'triage.med_sym1': 'Zich uitbreidende, warme, kloppende roodheid die duidelijk buiten de contouren van de piercing of tatoeage treedt.',
  'triage.med_sym2': 'Systemische symptomen zoals koorts (>38 °C), rillingen, versnelde hartslag of duidelijke algehele malaise.',
  'triage.med_sym3': 'Dikke, troebele, gele of groenige pusafscheiding met een opvallend vieze geur.',
  'triage.med_sym4': 'Rode streepvormige lijnen (lymfangitis) die vanaf het gebied richting de regionale lymfeklieren trekken.',
  'triage.med_sym5': 'Snel dunner wordende huid over het sieraad met direct gevaar op uitscheuren of uitstoting.',
  'triage.med_action': 'Advies: Zoek direct medisch contact met uw gynaecoloog, huisarts, verloskundige of een spoedeisende hulppost. Wacht niet op een afspraak in een studio.'
};

const I18N_PT = {
  // Search Bar & Filter Strings
  'search.placeholder': 'Pesquisar diretrizes clínicas, tópicos ou materiais (ex.: piercing, umbigo, mastite)...',
  'search.clear_btn': 'Limpar pesquisa',
  'search.filter_all': 'Todos os tópicos',
  'search.filter_procedures': 'Procedimentos',
  'search.filter_guidelines': 'Diretrizes especializadas',
  'search.results_count': '{count} tópico(s) clínico(s) encontrado(s) para "{query}"',
  'search.no_results_title': 'Nenhum tópico clínico encontrado',
  'search.no_results_desc': 'Tente pesquisar por tipo de procedimento (tatuagem, piercing, maquilhagem definitiva), fase (primeiro trimestre, amamentação) ou questão específica (tensão umbilical, via aérea do bebé, mastite, sinais de infeção).',
  'search.item_category_procedure': 'Referência de segurança do procedimento',
  'search.item_category_guideline': 'Diretrizes e tópicos clínicos',
  'search.view_action': 'Ver tópico',

  'meta.title': 'Referência de segurança em procedimentos na gravidez e amamentação | Poli International',
  'meta.description': 'Ponto de partida clínico e fundamentado para conversar com o seu médico ou parteira sobre tatuagens, piercings e maquilhagem definitiva durante a gravidez e o aleitamento.',
  'app.badge': 'Referência clínica e de estúdio',
  'app.title': 'Segurança em procedimentos: gravidez e amamentação',
  'app.subtitle': 'Um guia clínico fundamentado para orientar a consulta com o seu médico ou parteira sobre tatuagens, piercings e maquilhagem definitiva.',
  'app.lang_label': 'Idioma:',
  'lang.en': 'Inglês',
  'lang.de': 'Alemão',
  'lang.fr': 'Francês',
  'lang.es': 'Espanhol',
  'lang.it': 'Italiano',
  'lang.nl': 'Neerlandês',
  'lang.pt': 'Português',
  'form.procedure_label': 'Tipo de procedimento',
  'form.stage_label': 'Fase atual',
  'form.procedure_placeholder': '- Selecionar procedimento -',
  'form.stage_placeholder': '- Selecionar fase -',
  'proc.tattoo': 'Nova tatuagem',
  'proc.piercing': 'Piercing corporal (exceto lóbulo)',
  'proc.earlobe': 'Piercing no lóbulo da orelha',
  'proc.pmu': 'Maquilhagem definitiva / microblading',
  'proc.removal': 'Remoção de tatuagens a laser',
  'stage.trying': 'Tentativa de gravidez (fase pré-concecional)',
  'stage.first': 'Primeiro trimestre (semanas 1–12)',
  'stage.second': 'Segundo trimestre (semanas 13–26)',
  'stage.third': 'Terceiro trimestre (semanas 27–40)',
  'stage.breastfeeding': 'Amamentação / pós-parto',
  'prompt.title': 'Selecione um procedimento e uma fase',
  'prompt.body': 'Escolha acima um procedimento de arte corporal e a sua fase gestacional ou de aleitamento para consultar tópicos de conversa clínica e um memorando de perguntas para impressão.',
  'tier1.tag': 'Nível de prioridade 1: consulta precoce',
  'tier1.title': 'Prioridade alta: consultar o seu médico ou parteira com antecedência',
  'tier1.sub': 'Fatores fisiológicos ativos, desenvolvimento embrionário ou distensão dos tecidos requerem uma avaliação clínica prévia antes de agendar qualquer marcação.',
  'tier2.tag': 'Nível de prioridade 2: consulta programada',
  'tier2.title': 'Abordar na consulta de rotina com o seu médico ou parteira',
  'tier2.sub': 'As alterações fisiológicas maternas influenciam a cicatrização ou a colocação; fale sobre este tema na sua próxima consulta pré-natal.',
  'tier3.tag': 'Nível de prioridade 3: consulta de rotina',
  'tier3.title': 'Consulta de rotina com o seu médico ou parteira',
  'tier3.sub': 'Menor complexidade do procedimento; mencione as práticas estéreis habituais e os protocolos de cuidados posteriores à sua equipa de saúde.',
  'section.summary': 'Fundamentação clínica',
  'section.considerations': 'Considerações clínicas e fisiológicas',
  'section.checklist': 'Perguntas para o seu médico ou parteira',
  'section.checklist_intro': 'Assinale as questões que pretende colocar à sua parteira, obstetra ou médico de família na próxima consulta:',
  'section.provenance': 'Origem e base de evidência',
  'section.authority_title': 'Critério e autoridade da sua equipa de saúde',
  'section.authority_body': 'Esta ferramenta oferece orientação clínica geral. O seu médico ou parteira conhece o seu historial específico, análises sanguíneas e evolução gestacional, sendo o único responsável por decisões relativas à sua saúde.',
  'section.product_note_title': 'Nota de produto: materiais para joalharia de piercing',
  'section.sibling_title': 'Ferramentas de consulta clínica associadas',
  'section.print_btn': 'Imprimir lista de perguntas',
  'section.meta_reviewed': 'Última revisão:',
  'section.meta_date': 'Setembro de 2026',
  'section.meta_source': 'Base da revisão clínica:',
  'provenance.eu_instrument_prefix': 'Instrumento jurídico oficial:',
  'provenance.eu_instrument_name': 'Regulamento (UE) 2020/2081 da Comissão (anexo XVII do REACH: tintas para tatuagem e maquilhagem definitiva)',
  'print.doc_title': 'Guia de diálogo para consulta médica ou com parteira',
  'print.patient_date': 'Data:',
  'print.notes_title': 'Notas da consulta clínica e plano de acompanhamento',
  'print.patient_copy': 'Exemplar da paciente',
  'print.clinician_signature': 'Assinatura do profissional: _______________________',
  'print.gestational_age': 'Idade gestacional / Estado: ________________',
  'print.footer_note': 'Este documento destina-se a apoiar o diálogo nas consultas pré-natais ou de pós-parto. Não substitui a avaliação clínica individualizada realizada pelo seu médico ou parteira.',
  'product_note.body': 'Patrick Poli, criador da joalharia corporal BioFlex®, escolheu para ela um PP-R (copolímero aleatório de polipropileno) para que a joia acompanhe as alterações anatómicas. Materiais flexíveis como a joalharia BioFlex® e os metais de grau implante são opções de baixa reatividade para discutir com um perfurador profissional no caso de perfurações existentes ou em cicatrização durante a gravidez. O PP-R é moldado por injeção numa peça única e monolítica; não é PTFE (o qual é maquinado a partir de varão extrudido). Aconselhe-se sempre com o seu perfurador profissional e com a sua equipa de saúde quanto à escolha de joalharia durante a gestação.',
  'disclaimer.title': 'Aviso clínico importante:',
  'disclaimer.body': 'Esta ferramenta tem finalidade meramente informativa e não substitui de forma alguma o aconselhamento médico, diagnóstico ou tratamento. Consulte sempre a sua parteira, obstetra ou médico assistente antes de realizar qualquer procedimento de arte corporal.',
  'sibling.med_title': 'Verificador de interações medicamentosas',
  'sibling.med_desc': 'Consulte possíveis interações entre medicamentos receitados, terapias em curso e procedimentos de arte corporal.',
  'sibling.migration_title': 'Risco de migração e rejeição de piercings',
  'sibling.migration_desc': 'Avalie a tensão mecânica, profundidade e mobilidade tecidular que determinam a estabilidade da joia.',
  'tattoo.trying.summary': 'Os pigmentos de tatuagem depositam-se na derme e nos gânglios linfáticos regionais. Embora não haja registo de teratogenicidade antes da conceção, qualquer infeção cutânea bacteriana durante a implantação inicial requer gestão obstétrica atenta.',
  'tattoo.trying.c1': 'A evidência clínica sobre a circulação sistémica de nanopartículas de tinta durante a janela da conceção é muito restrita.',
  'tattoo.trying.c2': 'Uma infeção cutânea bacteriana grave com necessidade de antibioterapia durante a implantação do embrião limita as opções farmacológicas seguras.',
  'tattoo.trying.c3': 'A composição das tintas varia; produtos conformes com o Regulamento (UE) 2020/2081 restringem mais de 4.000 compostos perigosos, aminas aromáticas e metais pesados.',
  'tattoo.trying.c4': 'Agendar a sessão fora do período fértil ajuda a afastar a possibilidade de uma gravidez inicial não detetada coincidir com o processo de cicatrização cutânea.',
  'tattoo.trying.q1': 'Caso engravide pouco tempo após ser tatuada, o processo inflamatório de cicatrização pode ter algum impacto na fixação embrionária?',
  'tattoo.trying.q2': 'Que classes de antibióticos devem ser evitadas em caso de complicação dérmica enquanto tentamos conceber?',
  'tattoo.trying.q3': 'As minhas vacinas contra o tétano e a hepatite B estão devidamente atualizadas antes de procedimentos que perfuram a barreira cutânea?',
  'tattoo.trying.source': 'Prática clínica habitual: sem diretrizes pré-consecionais específicas emitidas pela ACOG ou RCOG.',
  'tattoo.first.summary': 'O primeiro trimestre (semanas 1–12) constitui o período fulcral da organogénese fetal. Qualquer infeção materna generalizada, episódio febril acentuado ou reação inflamatória assume particular relevância clínica nesta etapa.',
  'tattoo.first.c1': 'A diferenciação dos órgãos fetais decorre sobretudo entre as semanas 3 e 8 de gestação, exigindo a maior estabilidade fisiológica da mãe.',
  'tattoo.first.c2': 'Procedimentos que laceram a epiderme envolvem risco de contaminação bacteriana (estafilococos, estreptococos) e contacto com agentes patogénicos transmitidos pelo sangue.',
  'tattoo.first.c3': 'Episódios de náuseas matinais, vómitos e alterações imunitárias no início da gravidez podem dificultar a rotina de desinfeção e atrasar a cicatrização.',
  'tattoo.first.c4': 'Estúdios profissionais de tatuagem não realizam trabalhos em clientes grávidas no âmbito das suas normas de gestão de risco; analise o momento oportuno com o seu médico.',
  'tattoo.first.q1': 'Que riscos acarreta para a evolução embrionária o surgimento de uma infeção cutânea bacteriana no decurso do primeiro trimestre?',
  'tattoo.first.q2': 'De que forma as alterações imunitárias do início da gravidez influenciam a regeneração tecidular e que sinais devem motivar contacto urgente?',
  'tattoo.first.q3': 'Tendo feito uma tatuagem pouco antes de saber da gravidez, a que manifestações particulares devemos estar atentos?',
  'tattoo.first.source': 'Diretrizes da ACOG para perturbações cutâneas na gravidez; orientações do NHS sobre tatuagens em grávidas.',
  'tattoo.second.summary': 'No segundo trimestre (semanas 13–26), a organogénese básica encontra-se finalizada, mas a expansão do volume plasmático materno, o estiramento cutâneo e a retenção de fluidos alteram o conforto e o acabamento visual.',
  'tattoo.second.c1': 'O aumento do volume de sangue circulante e a vasodilatação dérmica podem favorecer hemorragias mais intensas e hematomas pronunciados.',
  'tattoo.second.c2': 'A rápida distensão da pele na região abdominal, ancas, seios e zona lombar distorce de forma permanente os traços e a simetria do desenho.',
  'tattoo.second.c3': 'Permanecer deitada de costas ou imóvel durante sessões longas pode desencadear a síndrome de hipotensão supina por compressão da veia cava inferior.',
  'tattoo.second.c4': 'Infeções cutâneas registadas no segundo trimestre exigem intervenção célere com recurso a medicação antimicrobiana compatível com a gravidez.',
  'tattoo.second.q1': 'Os meus valores de tensão arterial, glicemia ou eventual sensibilidade dérmica configuram riscos adicionais a ter em conta?',
  'tattoo.second.q2': 'Que áreas anatómicas devem ser inteiramente desconsideradas devido à distensão tecidular prevista para os próximos meses?',
  'tattoo.second.q3': 'De que modo a maior circulação sanguínea pode intensificar o sangramento na sessão e prolongar a fase de cicatrização?',
  'tattoo.second.source': 'Recomendações do NHS sobre procedimentos de arte corporal na gestação; prática clínica consensual.',
  'tattoo.third.summary': 'Nas semanas finais da gravidez (semanas 27–40), as limitações anatómicas, o edema generalizado e a proximidade do trabalho de parto tornam as novas tatuagens uma fonte desnecessária de complicações obstétricas.',
  'tattoo.third.c1': 'Apresentar uma lesão aberta ou uma infeção em curso no momento da admissão hospitalar para o parto complica a intervenção clínica.',
  'tattoo.third.c2': 'Manter o decúbito dorsal durante sessões prolongadas oprime a veia cava pelo peso do útero gravídico, provocando quedas abruptas de tensão e tonturas.',
  'tattoo.third.c3': 'O edema dos tecidos e a tensão cutânea dificultam o controlo rigoroso da profundidade de perfuração e da fixação dos pigmentos.',
  'tattoo.third.c4': 'A dor prolongada e o desgaste físico podem desencadear taquicardias maternas e cansaço excessivo em fases muito próximas do termo.',
  'tattoo.third.q1': 'Que tipo de complicações práticas pode suscitar uma tatuagem ainda a cicatrizar aquando da entrada no bloco de partos?',
  'tattoo.third.q2': 'De que forma a retenção hídrica do terceiro trimestre influencia a dispersão do pigmento e a suscetibilidade a agentes infeciosos?',
  'tattoo.third.q3': 'Caso surja uma infeção na pele próximo da data prevista para o parto, de que forma isso condiciona acessos venosos ou procedimentos hospitalares?',
  'tattoo.third.source': 'Orientações clínicas do NHS para preparação do parto; prática clínica geral.',
  'tattoo.breastfeeding.summary': 'As partículas de tinta de tatuagem ficam retidas na derme ou são absorvidas por macrófagos; não há qualquer evidência de passagem de pigmento íntegro para o leite materno. A prevenção de infeções bacterianas na mãe é a grande prioridade clínica.',
  'tattoo.breastfeeding.c1': 'As partículas inteiras de pigmento têm dimensões demasiado elevadas para transpor a barreira para o leite materno, embora faltem dados sobre eventuais subprodutos.',
  'tattoo.breastfeeding.c2': 'Qualquer infeção bacteriana adquirida durante o aleitamento requer a escolha criteriosa de terapêutica antibiótica segura para o lactente.',
  'tattoo.breastfeeding.c3': 'A privação de sono e as exigências do pós-parto reduzem as defesas do organismo e podem tornar a cicatrização mais vagarosa.',
  'tattoo.breastfeeding.c4': 'Tatuadores experientes recomendam aguardar até que a amamentação e a recuperação física da mãe estejam consolidadas.',
  'tattoo.breastfeeding.q1': 'Na eventualidade de uma complicação infeciosa na pele, que antibióticos são plenamente seguros sem suspender as mamadas?',
  'tattoo.breastfeeding.q2': 'Que intervalo de recuperação após o parto considera mais prudente antes de realizar uma intervenção cutânea eletiva?',
  'tattoo.breastfeeding.q3': 'O recém-nascido tem algum quadro de saúde (prematuridade, icterícia) que justifique precauções acrescidas perante infeções maternas?',
  'tattoo.breastfeeding.source': 'Informação do NHS sobre aleitamento e arte corporal; prática médica geral.',
  'piercing.trying.summary': 'Fazer um novo piercing corporal antes de engravidar exige meses seguidos de cicatrização contínua. A consolidação do túnel tecidular consome energia imunitária e deve antecipar transformações físicas futuras.',
  'piercing.trying.c1': 'Perfurações em locais sujeitos a atrito frequente (umbigo, mamilos) precisam habitualmente de 6 a 12 meses para cicatrizar totalmente.',
  'piercing.trying.c2': 'Se ocorrer uma gravidez durante a cicatrização inicial, a alteração dos níveis hormonais e a maior vascularização podem retardar a estabilização do tecido.',
  'piercing.trying.c3': 'A utilização de joalharia em materiais biocompatíveis de grau de implante evita quadros de dermatite de contacto e granulomas.',
  'piercing.trying.q1': 'Estando um piercing em fase de cicatrização quando ocorrer a fecundação, as oscilações hormonais precoces podem comprometer o tecido?',
  'piercing.trying.q2': 'Há algum antissético ou solução de lavagem que deva ser interrompido caso haja probabilidade de estar grávida?',
  'piercing.trying.source': 'Prática clínica consensual: ausência de diretrizes pré-consecionais formais para piercings por parte da ACOG ou RCOG.',
  'piercing.first.summary': 'Introduzir um corpo estranho e iniciar a cicatrização de um novo canal no primeiro trimestre cria uma sobrecarga imunitária no decurso da fase primordial de formação do feto.',
  'piercing.first.c1': 'A formação do canal epitelial constitui um processo inflamatório dinâmico que mobiliza a imunidade durante o desenvolvimento inicial do embrião.',
  'piercing.first.c2': 'Náuseas frequentes, quebras de energia e instabilidade hormonal nas semanas iniciais dificultam o rigor na higiene diária da perfuração.',
  'piercing.first.c3': 'Um quadro de infeção bacteriana com passagem à corrente sanguínea a partir de um piercing representa um perigo clínico evidente nas semanas 1–12.',
  'piercing.first.c4': 'Os estúdios de piercing recusam intervir em clientes grávidas; combine a oportunidade do procedimento com o seu médico.',
  'piercing.first.q1': 'Que riscos comporta para a estabilidade do embrião a cicatrização ativa de um novo corpo estranho durante as semanas 1–12?',
  'piercing.first.q2': 'Em caso de rubor ou calor junto da perfuração, com que brevidade devo procurar apoio médico especializado?',
  'piercing.first.q3': 'Que manifestações permitem distinguir a irritação mecânica habitual de um foco de infeção bacteriana com necessidade de fármacos?',
  'piercing.first.source': 'Consenso clínico da ACOG; recomendações do NHS sobre saúde cutânea no início da gestação.',
  'piercing.second.summary': 'No segundo trimestre, a joalharia corporal precisa de ser adaptada à rápida modificação das formas. As perfurações no umbigo, em particular, sofrem forte tração decorrente do crescimento abdominal.',
  'piercing.second.c1': 'A distensão do abdómen exerce tração anterior sobre o canal do piercing no umbigo, favorecendo a migração, o adelgaçamento da pele ou a expulsão da joia.',
  'piercing.second.c2': 'A vascularização acentuada dos tecidos propicia pequenos sangramentos e reações inflamatórias aumentadas ao manuseamento.',
  'piercing.second.c3': 'Perfurações antigas e estáveis podem ser mantidas se não causarem incómodo, ponderando a substituição por hastes flexíveis não metálicas.',
  'piercing.second.c4': 'Para causas comuns de migração sem relação com a gravidez, os perfuradores recorrem a parâmetros técnicos de estabilidade das joias.',
  'piercing.second.q1': 'De que forma a dilatação abdominal esperada para as próximas semanas poderá afetar o tecido do meu piercing no umbigo?',
  'piercing.second.q2': 'Será necessário retirar ou substituir joias corporais antes da realização das ecografias obstétricas marcadas?',
  'piercing.second.q3': 'Que sintomas acusam que a joia se encontra sob tensão mecânica excessiva pelo estiramento da pele?',
  'piercing.second.source': 'Guia informativo do NHS sobre piercings na gravidez; prática clínica habitual.',
  'piercing.third.summary': 'Obstetras e parteiras desaconselham vivamente novas perfurações corporais no terceiro trimestre devido à iminência do parto e às regras hospitalares quanto a corpos estranhos.',
  'piercing.third.c1': 'Os regulamentos das unidades de saúde obrigam a retirar peças metálicas antes de partos, cesarianas ou utilização de bisturi elétrico para prevenir queimaduras.',
  'piercing.third.c2': 'Um canal de piercing em fase de cicatrização recente próximo da data do parto abre uma porta de entrada evitável para microrganismos patogénicos.',
  'piercing.third.c3': 'A retenção de líquidos e as mudanças na postura durante o descanso geram fricção, compressão e edema sobre perfurações recentes.',
  'piercing.third.q1': 'Qual é a norma em vigor na maternidade quanto ao uso de joalharia corporal durante o trabalho de parto ou numa cesariana de urgência?',
  'piercing.third.q2': 'Tendo um piercing antigo que gostaria de manter aberto, são autorizados retentores flexíveis não metálicos na sala de partos?',
  'piercing.third.source': 'Normas clínicas do NHS e RCOG para blocos de parto, cirurgia obstétrica e enfermarias de maternidade.',
  'piercing.breastfeeding.summary': 'Piercings no mamilo durante o aleitamento interferem diretamente com os canais galactóforos, a pega correta do bebé e o aparecimento de mastites. Outros piercings seguem as regras habituais de cicatrização.',
  'piercing.breastfeeding.c1': 'Uma perfuração recente no mamilo constitui uma ferida contígua às glândulas mamárias, expondo a mãe a riscos graves de galactoforite, mastite e abcessos.',
  'piercing.breastfeeding.c2': 'A joia presente durante a mamada constitui um perigo real de engasgamento ou aspiração para o lactente e prejudica a sucção adequada.',
  'piercing.breastfeeding.c3': 'Em perfurações situadas noutras zonas do corpo, o cuidado fulcral reside em afastar infeções que requeiram medicamentos desaconselhados na amamentação.',
  'piercing.breastfeeding.q1': 'Que probabilidade real de mastite ou de ductos bloqueados existe ao amamentar com perfurações existentes nos mamilos?',
  'piercing.breastfeeding.q2': 'Ao fazer um piercing noutra zona corporal, que antisséticos tópicos e eventuais antibióticos são totalmente compatíveis com as mamadas?',
  'piercing.breastfeeding.source': 'Recomendações da OMS para nutrição infantil; normas do NHS relativas à amamentação.',
  'earlobe.trying.summary': 'A perfuração do lóbulo da orelha atinge um tecido de espessura reduzida e cura célere. A esterilização em autoclave, o procedimento com agulha descartável e joias biocompatíveis asseguram uma evolução tranquila.',
  'earlobe.trying.c1': 'O lóbulo apresenta cicatrização comparativamente rápida (normalmente entre 6 a 8 semanas) em contraste com as cartilagens.',
  'earlobe.trying.c2': 'A limpeza sistemática com soro fisiológico estéril afasta a fixação de bactérias na superfície da pele.',
  'earlobe.trying.c3': 'Materiais metálicos biocompatíveis previnem a sensibilização alérgica ao níquel e dermatites.',
  'earlobe.trying.q1': 'Há alguma objeção de ordem médica quanto a perfurações simples no lóbulo enquanto estamos a planear a gravidez?',
  'earlobe.trying.q2': 'O soro fisiológico estéril é o produto de referência indicado para a limpeza e cicatrização do lóbulo?',
  'earlobe.trying.source': 'Prática clínica rotineira: risco associado ao procedimento extremamente baixo.',
  'earlobe.first.summary': 'Apesar de a perfuração do lóbulo apresentar impacto sistémico negligenciável, qualquer intervenção estética eletiva no primeiro trimestre requer higiene estrita e disciplina nos cuidados.',
  'earlobe.first.c1': 'Intercorrências no lóbulo raramente têm repercussão sistémica, mas evitar estímulos inflamatórios no decurso da organogénese é uma boa prática preventiva.',
  'earlobe.first.c2': 'A fadiga e as queixas comuns do início da gravidez podem facilitar o esquecimento das irrigações diárias com soro fisiológico.',
  'earlobe.first.c3': 'Dê preferência a um estúdio profissional que utilize agulhas ocas esterilizadas em autoclave em detrimento de pistolas perfuradoras.',
  'earlobe.first.q1': 'Existe algum impedimento clínico para perfurar os lóbulos durante o primeiro trimestre sob rigorosas condições de assepsia?',
  'earlobe.first.q2': 'Que sinais clínicos no lóbulo devem motivar avaliação médica caso este apresente rubor, inchaço ou calor?',
  'earlobe.first.source': 'Prática clínica consensual: baixo risco com a devida prudência inerente ao primeiro trimestre.',
  'earlobe.second.summary': 'Perfurar o lóbulo no segundo trimestre não costuma levantar objeções clínicas se for realizado num estúdio certificado, com recurso a material esterilizado e metais biocompatíveis.',
  'earlobe.second.c1': 'O segundo trimestre é habitualmente o intervalo de maior equilíbrio físico e tranquilidade imunitária da gravidez.',
  'earlobe.second.c2': 'Duas limpezas diárias com solução fisiológica estéril chegam geralmente para prevenir infeções superficiais bacterianas.',
  'earlobe.second.c3': 'Joias fabricadas em titânio de grau de implante impedem episódios de hipersensibilidade de contacto.',
  'earlobe.second.q1': 'Na sua perspetiva obstétrica, há algum inconveniente em efetuar a perfuração dos lóbulos nesta fase da gravidez?',
  'earlobe.second.q2': 'Que ligas metálicas recomenda para a joia de forma a anular o risco de reações alérgicas cutâneas?',
  'earlobe.second.source': 'Prática médica habitual: abordagem segura para procedimentos cutâneos ligeiros.',
  'earlobe.third.summary': 'Perfurações no lóbulo realizadas no terceiro trimestre quase não afetam o organismo, mas devem ter em conta as disposições hospitalares sobre objetos metálicos no parto.',
  'earlobe.third.c1': 'Se a admissão para o parto ocorrer antes de concluídas as 6–8 semanas de cura, a retirada mandatória do brinco levará ao fecho do orifício.',
  'earlobe.third.c2': 'A utilização de equipamentos cirúrgicos com corrente elétrica numa eventual cesariana requer a remoção de todos os metais em contacto com a pele.',
  'earlobe.third.q1': 'Será necessário retirar brincos recentes durante a permanência no bloco de partos ou perante uma cesariana não agendada?',
  'earlobe.third.q2': 'Em caso de necessidade cirúrgica, é permitida a colocação de retentores plásticos nos lóbulos ou têm de sair por completo?',
  'earlobe.third.source': 'Protocolos hospitalares do NHS respeitantes ao uso de joalharia em serviços de obstetrícia.',
  'earlobe.breastfeeding.summary': 'Colocar brincos no lóbulo durante a amamentação não repercute na lactação nem nas qualidades do leite. Recomenda-se apenas higiene básica e atenção para que o bebé não puxe a joia.',
  'earlobe.breastfeeding.c1': 'A cicatrização da cartilagem ou lóbulo auricular não interfere com a prolactina, o parênquima mamário ou a ejeção do leite.',
  'earlobe.breastfeeding.c2': 'À medida que desenvolve reflexos, o lactente tem tendência a puxar objetos brilhantes; opte por brincos curtos, lisos e bem fixos.',
  'earlobe.breastfeeding.c3': 'Mantenha a aplicação de solução salina estéril duas vezes por dia até à estabilização completa do orifício.',
  'earlobe.breastfeeding.q1': 'Verifica-se alguma contraindicação clínica na colocação de piercings nos lóbulos durante o período de amamentação?',
  'earlobe.breastfeeding.q2': 'Que cuidados de limpeza tópica aconselha de modo a não criar irritações na pele sensível do recém-nascido?',
  'earlobe.breastfeeding.source': 'Consenso clínico geral: perfil de risco sistémico praticamente nulo.',
  'pmu.trying.summary': 'A maquilhagem definitiva combina a deposição de pigmento na derme com o recurso a anestésicos locais em creme (como a lidocaína). Recomenda-se articular as sessões antes de tentar engravidar.',
  'pmu.trying.c1': 'Pomadas anestésicas aplicadas sobre pele com escoriações apresentam absorção parcial para a corrente sanguínea da mãe.',
  'pmu.trying.c2': 'Pigmentos certificados pelo Regulamento (UE) 2020/2081 não contêm substâncias perigosas, mas não existem estudos de segurança na gravidez precoce.',
  'pmu.trying.c3': 'O agendamento do retoque habitual (decorridas 6–8 semanas) deve prever a possibilidade de uma gravidez surgir entretanto.',
  'pmu.trying.q1': 'Com que margem temporal relativamente à tentativa de conceção devo concluir os procedimentos de micropigmentação facial?',
  'pmu.trying.q2': 'Como deve ser gerido o retoque caso confirme que estou grávida no intervalo entre as duas sessões programadas?',
  'pmu.trying.source': 'Diretrizes da ACOG para intervenções estéticas; Regulamento (UE) 2020/2081.',
  'pmu.first.summary': 'A maquilhagem definitiva no primeiro trimestre conjuga a inserção de pigmentos na derme com a entrada de anestésicos tópicos na corrente sanguínea na fase crucial da formação dos órgãos do feto.',
  'pmu.first.c1': 'Anestésicos locais (lidocaína, prilocaína, tetracaína) chegam à circulação fetal; a sua utilização por motivos puramente estéticos é desaconselhada nestas semanas.',
  'pmu.first.c2': 'As variações hormonais no começo da gravidez afetam as glândulas sebáceas e a retenção, podendo originar resultados díspares na cor.',
  'pmu.first.c3': 'Profissionais credenciados de dermopigmentação recusam intervir no primeiro trimestre; determine uma altura adequada com o seu médico.',
  'pmu.first.q1': 'Qual é a posição médica relativamente à utilização de pomadas anestésicas locais (lidocaína/EMLA) no decurso do primeiro trimestre?',
  'pmu.first.q2': 'Em que medida as alterações hormonais podem condicionar a uniformidade da cor e favorecer o aparecimento de manchas escuras (hiperpigmentação)?',
  'pmu.first.source': 'Parecer da comissão da ACOG sobre tratamentos cosméticos eletivos; protocolos clínicos do RCOG.',
  'pmu.second.summary': 'No segundo trimestre, a permeabilidade a fármacos anestésicos e a propensão para alterações de pigmentação (máscara gravídica / cloasma) são as matérias preponderantes.',
  'pmu.second.c1': 'A atividade estimulada dos melanócitos faz com que intervenções nas sobrancelhas ou lábios possam cicatrizar com tonalidades irregulares ou manchas.',
  'pmu.second.c2': 'A utilização de preparações tópicas anestésicas continua a depender do consentimento expresso do seu médico ou parteira.',
  'pmu.second.c3': 'A hiperémia dos tecidos faciais fomenta micro-hemorragias que podem repelir os pigmentos durante o procedimento.',
  'pmu.second.q1': 'A predisposição para o melasma durante a gestação pode levar a que o traço da maquilhagem definitiva cicatrize de forma irregular?',
  'pmu.second.q2': 'Considera aceitável recorrer a creme com lidocaína para micropigmentação facial nesta fase do segundo trimestre?',
  'pmu.second.source': 'Prática clínica habitual; recomendações da British Association of Dermatologists para estética na gravidez.',
  'pmu.third.summary': 'No terceiro trimestre, as intervenções de maquilhagem definitiva são comummente adiadas por causa dos anestésicos, do inchaço no rosto e da dificuldade em permanecer deitada.',
  'pmu.third.c1': 'O edema facial modifica as proporções normais de sobrancelhas e lábios, podendo resultar em assimetrias visíveis após o parto.',
  'pmu.third.c2': 'Estar estendida na marquesa por mais de duas horas pode comprimir a veia cava inferior, desencadeando quebras de tensão e tonturas.',
  'pmu.third.c3': 'Poupar o organismo a agressões dérmicas desnecessárias e riscos de infeção perto do termo constitui uma conduta preventiva acertada.',
  'pmu.third.q1': 'Em que medida o inchaço típico do fim da gravidez pode prejudicar o desenho exato e a simetria de sobrancelhas ou lábios?',
  'pmu.third.q2': 'Na hipótese de uma reação alérgica ou inflamatória imprevista perto do parto, que medicamentos podem ser administrados com total segurança?',
  'pmu.third.source': 'Prática médica consensual: adiamento de tratamentos cosméticos não urgentes no terceiro trimestre.',
  'pmu.breastfeeding.summary': 'Ao longo do aleitamento materno, a micropigmentação levanta a questão da eliminação de anestésicos no leite e a exigência de uma assepsia rigorosa.',
  'pmu.breastfeeding.c1': 'A lidocaína retida por via cutânea é reduzida, mas vestígios podem surgir no leite materno; importa adequar o intervalo até à mamada seguinte.',
  'pmu.breastfeeding.c2': 'O pigmento fica retido no tecido dérmico e nos gânglios, sem evidência científica de presença na composição do leite materno.',
  'pmu.breastfeeding.c3': 'O repouso reduzido e a recomposição hormonal podem abrandar o processo de regeneração da epiderme facial.',
  'pmu.breastfeeding.q1': 'Quantas horas após a colocação de pomada anestésica facial de lidocaína é aconselhável aguardar antes de voltar a dar de mamar?',
  'pmu.breastfeeding.q2': 'Que produtos de regeneração cutânea não apresentam perigo em caso de contacto próximo com o recém-nascido?',
  'pmu.breastfeeding.source': 'Diretrizes do NHS para anestesia local no aleitamento; prática clínica geral.',
  'removal.trying.summary': 'A remoção a laser fragmenta as partículas de pigmento em resíduos microscópicos absorvidos por macrófagos, linfa e rins. Harmonize o plano de sessões com o plano para engravidar.',
  'removal.trying.c1': 'A fototermólise mantém compostos de degradação e mediadores de inflamação na circulação ao longo de diversas semanas.',
  'removal.trying.c2': 'O comportamento das nanopartículas e a sua eventual travessia da placenta nas primeiras semanas não foram esclarecidos pela literatura médica.',
  'removal.trying.c3': 'Os centros de estética e dermatologia recomendam suspender ou terminar os tratamentos com margem confortável antes de procurar a conceção.',
  'removal.trying.q1': 'De quanto tempo precisa o organismo para drenar e eliminar por completo os detritos de pigmento após uma sessão de laser?',
  'removal.trying.q2': 'É prudente interromper provisoriamente as sessões de despigmentação a laser enquanto procuramos engravidar?',
  'removal.trying.source': 'Normas para tecnologia laser da British Association of Dermatologists; prática médica geral.',
  'removal.first.summary': 'A remoção de tatuagens a laser no primeiro trimestre liberta fragmentos de tinta na circulação e provoca stress térmico e resposta inflamatória marcados durante a organogénese.',
  'removal.first.c1': 'A quebra fotoacústica esmiúça o pigmento em partículas nanométricas que entram pelos canais linfáticos e vasos sanguíneos.',
  'removal.first.c2': 'A segurança destas partículas em trânsito para o embrião nas semanas 1–12 não está comprovada do ponto de vista clínico.',
  'removal.first.c3': 'As doses expressivas de pomadas anestésicas ou injeções requeridas nas sessões de laser trazem uma carga medicamentosa sem utilidade clínica.',
  'removal.first.c4': 'Dermatologistas e operadores de laser suspendem por protocolo as sessões até depois do nascimento; debata os prazos com o seu médico.',
  'removal.first.q1': 'Quais são as razões clínicas detalhadas pelas quais os dermatologistas contraindicam o laser de despigmentação no primeiro trimestre?',
  'removal.first.q2': 'Tendo feito uma sessão de laser sem suspeitar da gravidez, que parâmetros devemos confirmar com atenção no próximo exame ecográfico?',
  'removal.first.source': 'Recomendações da ACOG sobre dispositivos laser na gestação; farmacologia clínica obstétrica.',
  'removal.second.summary': 'No segundo trimestre, a eliminação de tatuagens com laser continua desaconselhada devido à permanência de fragmentos em circulação e ao perigo de manchas definitivas na pele.',
  'removal.second.c1': 'A maior produção de melanina própria da gestação multiplica o risco de hiperpigmentação pós-inflamatória ou áreas sem pigmento irreversíveis.',
  'removal.second.c2': 'A eliminação dos resíduos pelos canais linfáticos estende-se habitualmente por 6 a 8 semanas após cada procedimento.',
  'removal.second.c3': 'Suspender o calendário de sessões até cumprir o período pós-parto é a decisão uniforme de dermatologistas e parteiras.',
  'removal.second.q1': 'O aumento da pigmentação da pele na gravidez potencia o risco de o laser deixar manchas permanentes ou cicatrizes?',
  'removal.second.q2': 'Há algum inconveniente clínico em pausar o processo de despigmentação por vários meses até ao nascimento?',
  'removal.second.source': 'British Association of Dermatologists; prática clínica consensual.',
  'removal.third.summary': 'O recurso ao laser na reta final da gravidez sobrecarrega o organismo com inflamação, desconforto e feridas potenciais numa fase em que o parto se avizinha.',
  'removal.third.c1': 'O surgimento de bolhas, queimaduras dérmicas e perigo de infeção decorrentes do laser é uma ocorrência indesejada perto do momento de dar à luz.',
  'removal.third.c2': 'A reação inflamatória despoletada no corpo pode traduzir-se em picos febris ou ritmo cardíaco materno acelerado.',
  'removal.third.c3': 'A posição exigida durante o tratamento revela-se muito desconfortável face ao volume e peso do abdómen no terceiro trimestre.',
  'removal.third.q1': 'Que tipo de problemas traria uma bolha ou queimadura de laser se o trabalho de parto se desencadeasse de forma súbita?',
  'removal.third.q2': 'Quantas semanas após o parto é geralmente recomendado aguardar para prosseguir com o tratamento a laser da tatuagem?',
  'removal.third.source': 'Prática médica rotineira: adiamento de procedimentos a laser facultativos na fase final da gravidez.',
  'removal.breastfeeding.summary': 'No período pós-parto com aleitamento, as partículas de pigmento recolhidas pelos macrófagos entram no circuito linfático. O possível trânsito de subprodutos para o leite carece de confirmação científica.',
  'removal.breastfeeding.c1': 'A investigação sobre a passagem para o leite materno das partículas de tinta libertadas pelo laser é muito escassa; por isso, costuma aconselhar-se prudência.',
  'removal.breastfeeding.c2': 'A despigmentação exige por norma quantidades apreciáveis de anestésico local, aconselhando moderação durante a lactação.',
  'removal.breastfeeding.c3': 'Retomar as sessões somente após o fim da amamentação elimina qualquer incerteza quanto à exposição do bebé a substâncias químicas.',
  'removal.breastfeeding.q1': 'Existe a possibilidade de micropartículas resultantes da destruição da tinta passarem para o leite do bebé?',
  'removal.breastfeeding.q2': 'Será aconselhável adiar novas sessões de laser para depois do desmame completo do lactente?',
  'removal.breastfeeding.source': 'Diretrizes clínicas do RCOG e NHS para medicação e atos estéticos na lactação; prática médica geral.'
,

  // Additional Improvements (Features 1-7)
  'nav.mode_reference': 'Referência de procedimento individual',
  'nav.mode_compare': 'Matriz comparativa de procedimentos',
  'nav.mode_hospital': 'Protocolo hospitalar e maternidade',
  'nav.mode_navel': 'Guia de distensão tecidular no umbigo',
  'nav.mode_nipple': 'Guia mamilos e amamentação',
  'nav.mode_postpartum': 'Cronograma de retoma pós-parto',
  'nav.mode_triage': 'Triagem de complicações',
  'worksheet.custom_notes_title': 'Notas pessoais e pontos de diálogo',
  'worksheet.custom_notes_desc': 'Acrescente as suas dúvidas pessoais, histórico dos seus piercings ou tópicos particulares para abordar com o seu médico ou parteira antes de imprimir:',
  'worksheet.custom_notes_placeholder': 'Escreva as suas dúvidas ou anotações aqui (ex.: "Perguntar sobre o piercing no umbigo durante o parto", "Mencionar cesariana programada às 39 semanas")...',
  'worksheet.print_client_notes_title': 'Notas da paciente e dúvidas específicas para a consulta:',
  'compare.title': 'Matriz comparativa de procedimentos lado a lado',
  'compare.subtitle': 'Selecione duas ou três combinações de procedimento e fase para comparar níveis de prioridade, justificações fisiológicas e tópicos de conversa diretamente.',
  'compare.col_heading': 'Cenário {num}',
  'compare.select_proc': 'Selecionar procedimento',
  'compare.select_stage': 'Selecionar fase',
  'compare.clear_btn': 'Redefinir matriz',
  'compare.prompt': 'Selecione um procedimento e uma fase para pelo menos duas colunas para comparar as considerações clínicas lado a lado.',
  'compare.priority_label': 'Prioridade de diálogo',
  'compare.rationale_label': 'Justificação clínica',
  'compare.considerations_label': 'Fatores fisiológicos fundamentais',
  'compare.source_label': 'Base de evidência',
  'hospital.title': 'Planeador de diretrizes de joalharia em hospital e bloco de partos',
  'hospital.subtitle': 'Lista estruturada para verificar na consulta pré-natal das 36 semanas sobre eletrocautério, partos urgentes e contacto neonatal.',
  'hospital.intro': 'As normas hospitalares sobre joalharia durante o trabalho de parto variam consoante a maternidade, protocolos cirúrgicos e administrações regionais de saúde. Reveja estes pontos com o seu obstetra ou parteira antes das 36 semanas.',
  'hospital.item1_title': 'Equipamentos de eletrocautério e diatermia monopolar',
  'hospital.item1_desc': 'Na eventualidade de um parto cirúrgico não planeado ou de emergência (cesariana), o bisturi elétrico monopolar cria um circuito através do corpo. Joalharia metálica condutora acarreta perigo de queimadura térmica se estiver situada no trajeto entre o campo operatório e a placa neutra dispersiva.',
  'hospital.item2_title': 'Vias aéreas de emergência e gestão anestésica',
  'hospital.item2_desc': 'Peças em lábios, língua, boca ou nariz apresentam risco de aspiração ou obstrução das vias respiratórias numa intubação de emergência ou ventilação por máscara se for requerida anestesia geral.',
  'hospital.item3_title': 'Joalharia pélvica, genital e perineal',
  'hospital.item3_desc': 'Piercings genitais e perineais implicam perigo de laceração e rasgo durante a descida fetal e estiramento tecidular, prejudicando eventuais episiotomias ou reparações perineais. As maternidades exigem a sua remoção antes da fase ativa de parto.',
  'hospital.item4_title': 'Contacto cutâneo e manuseamento do recém-nascido',
  'hospital.item4_desc': 'Joalharia no rosto, pescoço, pulsos ou tronco pode causar escoriações involuntárias na pele sensível do bebé durante o contacto pele a pele imediato e as primeiras mamadas.',
  'hospital.item5_title': 'Ressonância magnética de diagnóstico (RMN)',
  'hospital.item5_desc': 'Caso seja necessário realizar exames imagiológicos urgentes no pós-parto, metais ferromagnéticos apresentam perigos associados a efeito projétil, torção mecânica e aquecimento por radiofrequência.',
  'hospital.action_title': 'Pontos práticos para a consulta das 36 semanas',
  'hospital.action1': 'Informe-se com a sua parteira sobre os regulamentos do bloco de partos e salas operatórias da sua maternidade.',
  'hospital.action2': 'Solicite o registo no boletim de saúde de grávida caso seja tolerado o uso de retentores inertes não metálicos em zonas distantes do abdómen.',
  'hospital.action3': 'Programe a retirada prévia de peças orais, faciais, genitais e abdominais antes da data provável de parto, solicitando ajuda em estúdio profissional para fechos mais apertados.',
  'hospital.product_note_title': 'Nota de produto: Retentores inertes não metálicos',
  'hospital.product_note_body': 'Retentores não condutores e sem metal, em copolímero aleatório PP-R ou noutros polímeros não condutores de grau implante, não conduzem eletricidade e não são ferromagnéticos. São muitas vezes usados para manter aberta uma perfuração consolidada quando o regulamento da instituição admite retentores não metálicos. Os protocolos de bloco operatório e anestesia permanecem sob a autoridade da equipa médica e cirúrgica presente, que tem a palavra final sobre qualquer corpo estranho.',
  'navel.title': 'Guia visual de distensão tecidular no umbigo',
  'navel.subtitle': 'Modelos didáticos de forças mecânicas que evidenciam o estiramento da parede abdominal, as tensões transversais e a distorção do canal perfurado ao longo dos trimestres.',
  'navel.intro': 'Conforme o útero gravídico expande a parede abdominal anterior, o canal umbilical enfrenta fortes forças de tração. Este modelo visual demonstra a alteração dessas tensões anatómicas.',
  'navel.t1_title': 'Pré-conceção / Primeiro trimestre: Geometria de repouso',
  'navel.t1_desc': 'A espessura da pele mantém-se normal com tensão nula. O canal do piercing assenta verticalmente no tecido adiposo subcutâneo sem deformação da parede abdominal.',
  'navel.t2_title': 'Segundo trimestre: Expansão lateral e longitudinal',
  'navel.t2_desc': 'O desenvolvimento do volume uterino começa a aplanar a concavidade do umbigo. A pele fica sujeita a trações contínuas, exercendo forças de cisalhamento contra as extremidades rígidas da joia.',
  'navel.t3_title': 'Terceiro trimestre: Severa tração mecânica e eversão',
  'navel.t3_desc': 'A distensão máxima pode levar à eversão do umbigo (projeção para fora). A pressão interna adelgaça a camada dérmica sobre a joia rígida, ampliando exponencialmente o risco de migração, rasgo ou cicatrizes hipertróficas definitivas.',
  'navel.stress_points_title': 'Aspetos essenciais de tensão física a esclarecer com a equipa de saúde',
  'navel.stress_p1': 'O adelgaçamento visível da pele entre os orifícios traduz tensão excessiva, impondo a retirada da joia para prevenir o rompimento irreversível do canal.',
  'navel.stress_p2': 'Hastes curvas rígidas em metal não conseguem acompanhar a curvatura do ventre, originando zonas de pressão localizada sob as esferas terminais.',
  'navel.stress_p3': 'O aplanamento do umbigo retira o abrigo anatómico, sujeitando a peça a fricção direta causada por elásticos de calças e faixas de suporte de gravidez.',
  'navel.sizing_link_prefix': 'Para informações técnicas de dimensões, espessuras e comprimentos de hastes, consulte o',
  'navel.sizing_link_text': 'Visualizador de tamanhos de joalharia',
  'navel.sizing_link_suffix': '. Não realize aumentos de calibre ou trocas de tamanho sem acompanhamento durante a gravidez; esclareça qualquer alteração com o seu anilhador profissional e a sua parteira.',
  'navel.product_note_title': 'Nota de produto: Retentores umbilicais flexíveis',
  'navel.product_note_body': 'Patrick Poli, criador da joalharia corporal BioFlex®, escolheu para ela um copolímero aleatório PP-R flexível, que verga e acompanha os contornos anatómicos sem criar pontos rígidos de pressão. O PP-R é moldado por injeção numa peça única monolítica; não é PTFE (que tem de ser maquinado a partir de barras extrudidas e tende a perder orientação). Caso a tensão provoque vermelhidão, dor ou adelgaçamento no umbigo, retire a joia sem hesitar, qualquer que seja o material.',
  'nipple.title': 'Guia piercings no mamilo e amamentação',
  'nipple.subtitle': 'Orientações sobre a mecânica da amamentação, a remoção da joia antes de cada mamada, a segurança respiratória do bebé e quando procurar uma profissional de amamentação.',
  'nipple.intro': 'Perfurações nos mamilos exigem precauções atentas durante a gestação e a amamentação para garantir a nutrição do bebé e evitar danos anatómicos consideráveis.',
  'nipple.choking_title': 'Segurança vital das vias respiratórias do bebé: retirar as joias antes de qualquer mamada ou extração',
  'nipple.choking_desc': 'Qualquer joia, esfera ou retentor deixado no mamilo acarreta um perigo imediato e gravíssimo de asfixia, aspiração brônquica e obstrução respiratória para a criança durante o aleitamento ou o uso de bomba de extração. Todas as peças têm de ser inteiramente retiradas antes de aproximar o bebé da mama.',
  'nipple.mech_title': 'Mecânica da lactação e fluxo de leite',
  'nipple.mech_desc': 'O mamilo humano alberga entre 4 e 18 orifícios de ductos lactíferos. Os canais de piercings consolidados passam habitualmente pelo meio ou junto a vários desses canais. Durante a ejeção do leite, este pode fluir tanto pelos poros naturais como pelos orifícios da perfuração.',
  'nipple.latch_title': 'Qualidade da pega e vedação palatina',
  'nipple.latch_desc': 'Tecido fibroso proveniente de piercings antigos pode alterar a flexibilidade e projeção do mamilo no momento em que o lactente tenta colapsá-lo profundamente contra o palato mole, provocando desconforto materno ou pegas superficiais.',
  'nipple.consult_title': 'Apoio de parteira ou conselheira de lactação',
  'nipple.consult_desc': 'Não efetue autoavaliações à permeabilidade dos ductos ou consistência do tecido cicatricial. Na presença de ingurgitamento localizado, dor ou dificuldades com a pega, agende uma observação presencial com uma conselheira de lactação credenciada IBCLC ou a sua parteira.',
  'nipple.infection_title': 'Perigo de mastite e reinserções frequentes',
  'nipple.infection_desc': 'Inserir e retirar continuamente joias num canal fragilizado entre as mamadas arrasta a flora bacteriana da pele para o interior dos seios lactíferos, aumentando significativamente a propensão para mastites infecciosas.',
  'postpartum.title': 'Cronograma didático de retoma pós-parto',
  'postpartum.subtitle': 'Fases fisiológicas relativas à regeneração tecidular, reconstituição imunitária, readaptação hemodinâmica e regulação hormonal antes de agendar modificações corporais.',
  'postpartum.intro': 'A retoma de intervenções estéticas eletivas após o parto rege-se pela evolução fisiológica materna e não por um prazo arbitrário de calendário. Dialogue sobre estas fases com o seu médico ou parteira na consulta pós-parto.',
  'postpartum.p1_title': 'Semanas 0–6: Puerpério imediato e reajuste hemodinâmico',
  'postpartum.p1_desc': 'A involução uterina, escoamento de lóquios, regeneração do leito placentário e oscilações do volume sanguíneo concentram as reservas do organismo. A imunidade está a sair do estado de adaptação gravídica; agressões cutâneas eletivas não são clinicamente recomendáveis.',
  'postpartum.p2_title': 'Semanas 6–12: Consulta pós-parto e consolidação da cicatrização',
  'postpartum.p2_desc': 'Após validação na revisão médica das 6 semanas, as lacerações de períneo ou cicatrizes de cesariana encontram-se estabilizadas. Contudo, o cansaço, o sono intermitente e o arranque da produção de leite continuam a condicionar a resposta imunitária global.',
  'postpartum.p3_title': 'Meses 3–6: Estabilização hormonal e remodelação tecidular',
  'postpartum.p3_desc': 'A maleabilidade do tecido conjuntivo decorrente da relaxina atenua-se paulatinamente. Nas mães que não amamentam, a integridade da barreira cutânea, reatividade vascular e parâmetros analíticos de base aproximam-se dos valores prévios.',
  'postpartum.p4_title': 'Período de aleitamento até ao desmame: Atenção contínua',
  'postpartum.p4_desc': 'Durante a amamentação ativa, a prolactina elevada suprime os ciclos ovulatórios normais e interfere na hidratação tecidular. A despigmentação a laser e os pigmentos cosméticos eletivos exigem cautela relativamente à proteção da criança.',
  'postpartum.closing_title': 'Recomendação sobre prazos clínicos',
  'postpartum.closing_desc': 'A velocidade de recuperação pessoal flutua amplamente em função do tipo de parto, perda de sangue, estado nutricional e ritmos de aleitamento. Discuta sempre os prazos diretamente com o seu obstetra, médico de família ou parteira antes de efetuar qualquer marcação.',
  'triage.title': 'Referência de triagem de complicações em piercings e tatuagens existentes',
  'triage.subtitle': 'Distinção clínica entre irritação mecânica provocada pelo estiramento da pele e manifestações que justificam avaliação clínica urgente por médico ou parteira.',
  'triage.intro': 'Este quadro orienta na diferenciação entre pressões físicas simples e infeções clínicas localizadas ou generalizadas. A ferramenta não estabelece diagnósticos nem emite autorizações; qualquer sintoma carece de avaliação especializada.',
  'triage.cat_mechanical': 'Irritação mecânica (tensão física localizada)',
  'triage.cat_medical': 'Sinais que requerem observação médica urgente',
  'triage.mech_sym1': 'Eritema moderado (vermelhidão) estritamente contido junto aos orifícios, sem calor irradiado.',
  'triage.mech_sym2': 'Inexistência de febre, calafrios, dores corporais ou quebra do estado geral.',
  'triage.mech_sym3': 'Drenagem de linfa límpida ou amarelada clara que seca em crostas pequenas, sem odor desagradável.',
  'triage.mech_sym4': 'Sensação desconfortável que dissipa logo que a pressão de roupa justa, elásticos ou joias rígidas é aliviada.',
  'triage.mech_action': 'Procedimento: Aliviar roupas apertadas, não manipular a área com mãos sujas e contactar o anilhador profissional para avaliar a dimensão da haste. Se os sinais persistirem ou piorarem, contacte o seu médico ou parteira.',
  'triage.med_sym1': 'Eritema alastrado, quente e pulsátil que transborda os limites habituais da tatuagem ou do piercing.',
  'triage.med_sym2': 'Manifestações corporais incluindo febre (>38 °C), arrepios intensos, batimento cardíaco acelerado ou prostração materna.',
  'triage.med_sym3': 'Exsudado purulento viscoso, opaco, amarelado ou esverdeado, libertando odor nítido e desagradável.',
  'triage.med_sym4': 'Riscos avermelhados contínuos (linfangite) a progredir a partir do ferimento na direção das cadeias ganglionares.',
  'triage.med_sym5': 'Adelgaçamento acelerado da cobertura de pele com risco iminente de rotura do canal ou expulsão da joia.',
  'triage.med_action': 'Procedimento: Obtenha avaliação clínica imediata junto do seu obstetra, médico de família, parteira ou serviço de urgência. Não aguarde por um atendimento de estúdio.'
};

// Dictionaries map - All 7 languages registered
const DICTIONARIES = {
  en: I18N_EN,
  fr: I18N_FR,
  it: I18N_IT,
  de: I18N_DE,
  es: I18N_ES,
  nl: I18N_NL,
  pt: I18N_PT
};

let currentLanguage = 'en';

// Read stored language if available (Rule 6)
try {
  const saved = localStorage.getItem('poli_tools_language');
  if (saved && ['en', 'de', 'fr', 'es', 'it', 'nl', 'pt'].includes(saved)) {
    currentLanguage = saved;
    document.documentElement.lang = saved;
  }
} catch (e) {
  // localStorage disabled or iframe restricted
}

function t(key, params = {}) {
  const dict = DICTIONARIES[currentLanguage] || DICTIONARIES['en'];
  let val = dict[key] || DICTIONARIES['en'][key] || key;
  for (const [pKey, pVal] of Object.entries(params)) {
    val = val.replace(new RegExp(`\\{${pKey}\\}`, 'g'), String(pVal));
  }
  return val;
}

// Inline SVG icon generator - no canvas, no image library, zero external resources
function getSvgIcon(name) {
  switch (name) {
    case 'priority-1':
      return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
    case 'priority-2':
      return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>';
    case 'priority-3':
      return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
    case 'clipboard':
      return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>';
    case 'stethoscope':
      return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 3v5a6 6 0 0 0 12 0V3"/><path d="M7.5 3H3"/><path d="M19.5 3h-4.5"/><path d="M10.5 14v2.5a4.5 4.5 0 0 0 9 0V15"/><circle cx="19.5" cy="15" r="2"/></svg>';
    case 'book':
      return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>';
    case 'printer':
      return '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>';
    case 'link-arrow':
      return '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>';
    case 'info':
      return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>';
    case 'search':
      return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
    default:
      return '';
  }
}

// Structured Matrix linking keys and conversation priority tiers
const MATRIX = {
  tattoo: {
    trying:       { tier: 2, cCount: 4, qCount: 3, hasEU: true },
    first:        { tier: 1, cCount: 4, qCount: 3, hasEU: false },
    second:       { tier: 2, cCount: 4, qCount: 3, hasEU: false },
    third:        { tier: 1, cCount: 4, qCount: 3, hasEU: false },
    breastfeeding:{ tier: 2, cCount: 4, qCount: 3, hasEU: false }
  },
  piercing: {
    trying:       { tier: 2, cCount: 3, qCount: 2, hasEU: false },
    first:        { tier: 1, cCount: 4, qCount: 3, hasEU: false },
    second:       { tier: 2, cCount: 4, qCount: 3, hasEU: false },
    third:        { tier: 1, cCount: 3, qCount: 2, hasEU: false },
    breastfeeding:{ tier: 1, cCount: 3, qCount: 2, hasEU: false }
  },
  earlobe: {
    trying:       { tier: 3, cCount: 3, qCount: 2, hasEU: false },
    first:        { tier: 2, cCount: 3, qCount: 2, hasEU: false },
    second:       { tier: 3, cCount: 3, qCount: 2, hasEU: false },
    third:        { tier: 2, cCount: 2, qCount: 2, hasEU: false },
    breastfeeding:{ tier: 3, cCount: 3, qCount: 2, hasEU: false }
  },
  pmu: {
    trying:       { tier: 2, cCount: 3, qCount: 2, hasEU: true },
    first:        { tier: 1, cCount: 3, qCount: 2, hasEU: false },
    second:       { tier: 2, cCount: 3, qCount: 2, hasEU: false },
    third:        { tier: 1, cCount: 3, qCount: 2, hasEU: false },
    breastfeeding:{ tier: 2, cCount: 3, qCount: 2, hasEU: false }
  },
  removal: {
    trying:       { tier: 2, cCount: 3, qCount: 2, hasEU: false },
    first:        { tier: 1, cCount: 4, qCount: 2, hasEU: false },
    second:       { tier: 1, cCount: 3, qCount: 2, hasEU: false },
    third:        { tier: 1, cCount: 3, qCount: 2, hasEU: false },
    breastfeeding:{ tier: 1, cCount: 3, qCount: 2, hasEU: false }
  }
};

// DOM References
const procedureSel = document.getElementById('procedure');
const stageSel     = document.getElementById('stage');
const languageSel  = document.getElementById('language-select');
const resultDiv    = document.getElementById('result');
const promptCard   = document.getElementById('prompt-card');
const selectCard   = document.getElementById('select-card');
const searchInput  = document.getElementById('topic-search-input');
const searchClearBtn = document.getElementById('search-clear-btn');
const searchFilterPills = document.querySelectorAll('.search-filter-pill');

// Mode navigation state & in-memory worksheet state
let currentMode = 'reference';
let clientCustomNotes = '';
let currentSearchQuery = '';
let currentSearchFilter = 'all'; // 'all' | 'procedures' | 'guidelines'
let compareScenarios = [
  { proc: '', stage: '' },
  { proc: '', stage: '' },
  { proc: '', stage: '' }
];

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.textContent = t(key);
    }
  });

  document.title = t('meta.title');
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', t('meta.title'));
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', t('meta.description'));

  // Update search input placeholder
  if (searchInput) {
    searchInput.placeholder = t('search.placeholder');
  }
  if (searchClearBtn) {
    searchClearBtn.title = t('search.clear_btn');
    searchClearBtn.setAttribute('aria-label', t('search.clear_btn'));
  }

  // Update dropdown options
  const procOptions = [
    { val: '', textKey: 'form.procedure_placeholder' },
    { val: 'tattoo', textKey: 'proc.tattoo' },
    { val: 'piercing', textKey: 'proc.piercing' },
    { val: 'earlobe', textKey: 'proc.earlobe' },
    { val: 'pmu', textKey: 'proc.pmu' },
    { val: 'removal', textKey: 'proc.removal' }
  ];

  const currentProcVal = procedureSel.value;
  procedureSel.innerHTML = '';
  procOptions.forEach(opt => {
    const o = document.createElement('option');
    o.value = opt.val;
    o.textContent = t(opt.textKey);
    if (opt.val === '') o.disabled = false;
    procedureSel.appendChild(o);
  });
  procedureSel.value = currentProcVal;

  const stageOptions = [
    { val: '', textKey: 'form.stage_placeholder' },
    { val: 'trying', textKey: 'stage.trying' },
    { val: 'first', textKey: 'stage.first' },
    { val: 'second', textKey: 'stage.second' },
    { val: 'third', textKey: 'stage.third' },
    { val: 'breastfeeding', textKey: 'stage.breastfeeding' }
  ];

  const currentStageVal = stageSel.value;
  stageSel.innerHTML = '';
  stageOptions.forEach(opt => {
    const o = document.createElement('option');
    o.value = opt.val;
    o.textContent = t(opt.textKey);
    if (opt.val === '') o.disabled = false;
    stageSel.appendChild(o);
  });
  stageSel.value = currentStageVal;
}

function getFilteredClinicalTopics(query, filter) {
  const q = (query || '').trim().toLowerCase();
  const topics = [];

  // 1. Procedures from MATRIX (25 scenarios)
  if (filter === 'all' || filter === 'procedures') {
    const procs = ['tattoo', 'piercing', 'earlobe', 'pmu', 'removal'];
    const stages = ['trying', 'first', 'second', 'third', 'breastfeeding'];

    for (const p of procs) {
      for (const s of stages) {
        const entry = MATRIX[p] && MATRIX[p][s];
        if (!entry) continue;

        const procTitle = t('proc.' + p);
        const stageTitle = t('stage.' + s);
        const title = procTitle + ' - ' + stageTitle;
        const summary = t(p + '.' + s + '.summary');

        // Gather considerations
        const considerations = [];
        for (let i = 1; i <= entry.cCount; i++) {
          considerations.push(t(p + '.' + s + '.c' + i));
        }

        // Gather questions
        const questions = [];
        for (let i = 1; i <= entry.qCount; i++) {
          questions.push(t(p + '.' + s + '.q' + i));
        }

        const searchableText = [
          procTitle,
          stageTitle,
          title,
          summary,
          ...considerations,
          ...questions
        ].join(' ').toLowerCase();

        let matches = false;
        const snippets = [];

        if (!q) {
          matches = true;
        } else {
          // Token-based matching
          const tokens = q.split(/\s+/);
          matches = tokens.every(tok => searchableText.includes(tok));

          if (matches) {
            // Find relevant snippet
            for (const c of considerations) {
              if (tokens.some(tok => c.toLowerCase().includes(tok))) {
                snippets.push(c);
              }
            }
            for (const qu of questions) {
              if (tokens.some(tok => qu.toLowerCase().includes(tok))) {
                snippets.push(qu);
              }
            }
          }
        }

        if (matches) {
          topics.push({
            id: p + '-' + s,
            category: 'procedure',
            proc: p,
            stage: s,
            tier: entry.tier,
            title: title,
            desc: summary,
            snippets: snippets.length > 0 ? snippets : considerations.slice(0, 2)
          });
        }
      }
    }
  }

  // 2. Specialized Clinical Guidelines & Visual Tools
  if (filter === 'all' || filter === 'guidelines') {
    const guidelines = [
      {
        id: 'hospital',
        mode: 'hospital',
        titleKey: 'hospital.title',
        descKey: 'hospital.subtitle',
        snippetKeys: [
          'hospital.electrosurgery_title',
          'hospital.retention_title',
          'hospital.csection_title',
          'hospital.mri_title'
        ]
      },
      {
        id: 'navel',
        mode: 'navel',
        titleKey: 'navel.title',
        descKey: 'navel.subtitle',
        snippetKeys: [
          'navel.stress_p1',
          'navel.stress_p2',
          'navel.stress_p3',
          'navel.product_note_title'
        ]
      },
      {
        id: 'nipple',
        mode: 'nipple',
        titleKey: 'nipple.title',
        descKey: 'nipple.subtitle',
        snippetKeys: [
          'nipple.choking_title',
          'nipple.mech_title',
          'nipple.latch_title',
          'nipple.infection_title'
        ]
      },
      {
        id: 'postpartum',
        mode: 'postpartum',
        titleKey: 'postpartum.title',
        descKey: 'postpartum.subtitle',
        snippetKeys: [
          'postpartum.p1_title',
          'postpartum.p2_title',
          'postpartum.p3_title',
          'postpartum.p4_title'
        ]
      },
      {
        id: 'triage',
        mode: 'triage',
        titleKey: 'triage.title',
        descKey: 'triage.subtitle',
        snippetKeys: [
          'triage.cat_mechanical',
          'triage.cat_medical',
          'triage.mech_action',
          'triage.med_action'
        ]
      },
      {
        id: 'compare',
        mode: 'compare',
        titleKey: 'compare.title',
        descKey: 'compare.subtitle',
        snippetKeys: [
          'compare.subtitle',
          'compare.matrix_heading'
        ]
      }
    ];

    for (const g of guidelines) {
      const gTitle = t(g.titleKey);
      const gDesc = t(g.descKey);
      const gSnippets = g.snippetKeys.map(k => t(k));

      const searchableText = [gTitle, gDesc, ...gSnippets].join(' ').toLowerCase();

      let matches = false;
      const matchedSnippets = [];

      if (!q) {
        matches = true;
      } else {
        const tokens = q.split(/\s+/);
        matches = tokens.every(tok => searchableText.includes(tok));
        if (matches) {
          for (const s of gSnippets) {
            if (tokens.some(tok => s.toLowerCase().includes(tok))) {
              matchedSnippets.push(s);
            }
          }
        }
      }

      if (matches) {
        topics.push({
          id: g.id,
          category: 'guideline',
          mode: g.mode,
          title: gTitle,
          desc: gDesc,
          snippets: matchedSnippets.length > 0 ? matchedSnippets : gSnippets.slice(0, 2)
        });
      }
    }
  }

  return topics;
}

function updateResult() {
  // Search query takes precedence over standard views
  if (currentSearchQuery.trim() !== '') {
    if (selectCard) selectCard.style.display = 'none';
    if (promptCard) promptCard.hidden = true;
    resultDiv.innerHTML = '';

    const results = getFilteredClinicalTopics(currentSearchQuery, currentSearchFilter);
    renderSearchResultsView(
      resultDiv,
      t,
      getSvgIcon,
      results,
      currentSearchQuery,
      (item) => {
        // Clear search input and navigate to selected topic
        currentSearchQuery = '';
        if (searchInput) searchInput.value = '';
        if (searchClearBtn) searchClearBtn.hidden = true;

        if (item.category === 'procedure') {
          currentMode = 'reference';
          procedureSel.value = item.proc;
          stageSel.value = item.stage;
          document.querySelectorAll('.mode-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-mode') === 'reference');
          });
          updateResult();
        } else if (item.category === 'guideline' && item.mode) {
          currentMode = item.mode;
          document.querySelectorAll('.mode-btn').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-mode') === currentMode);
          });
          updateResult();
        }
      }
    );
    return;
  }

  // Mode dispatcher for 7 features
  if (currentMode !== 'reference') {
    if (selectCard) selectCard.style.display = 'none';
    if (promptCard) promptCard.hidden = true;
    resultDiv.innerHTML = '';
    
    if (currentMode === 'compare') {
      renderCompareView(
        resultDiv,
        t,
        getSvgIcon,
        MATRIX,
        compareScenarios,
        (idx, p, s) => {
          compareScenarios[idx].proc = p;
          compareScenarios[idx].stage = s;
          updateResult();
        },
        () => {
          compareScenarios = [
            { proc: '', stage: '' },
            { proc: '', stage: '' },
            { proc: '', stage: '' }
          ];
          updateResult();
        }
      );
    } else if (currentMode === 'hospital') {
      renderHospitalView(resultDiv, t, getSvgIcon);
    } else if (currentMode === 'navel') {
      renderNavelView(resultDiv, t, getSvgIcon);
    } else if (currentMode === 'nipple') {
      renderNippleView(resultDiv, t, getSvgIcon);
    } else if (currentMode === 'postpartum') {
      renderPostpartumView(resultDiv, t, getSvgIcon);
    } else if (currentMode === 'triage') {
      renderTriageView(resultDiv, t, getSvgIcon);
    }
    return;
  }

  // Single Procedure Reference Mode
  if (selectCard) selectCard.style.display = '';
  const proc  = procedureSel.value;
  const stage = stageSel.value;

  // Rule 3: Every input starts empty; show guidance prompt when unselected
  if (!proc || !stage) {
    if (promptCard) promptCard.hidden = false;
    resultDiv.innerHTML = '';
    return;
  }

  // Rule 4: Validate at point of entry
  const entry = MATRIX[proc] && MATRIX[proc][stage];
  if (!entry) {
    if (promptCard) promptCard.hidden = false;
    resultDiv.innerHTML = '';
    return;
  }

  if (promptCard) promptCard.hidden = true;

  const tier = entry.tier;
  const tierClass = `tier-${tier}`;
  const iconName  = `priority-${tier}`;

  // Build considerations keys
  const considerationKeys = [];
  for (let i = 1; i <= entry.cCount; i++) {
    considerationKeys.push(`${proc}.${stage}.c${i}`);
  }

  // Build questions checklist keys
  const questionKeys = [];
  for (let i = 1; i <= entry.qCount; i++) {
    questionKeys.push(`${proc}.${stage}.q${i}`);
  }

  // Container elements
  const card = document.createElement('div');
  card.className = 'result-card';

  // 1. Priority Banner
  const banner = document.createElement('div');
  banner.className = `priority-banner ${tierClass}`;

  const iconWrap = document.createElement('div');
  iconWrap.className = 'priority-icon-wrap';
  iconWrap.innerHTML = getSvgIcon(iconName);

  const contentWrap = document.createElement('div');
  contentWrap.className = 'priority-content';

  const tierTag = document.createElement('span');
  tierTag.className = 'priority-tier-tag';
  tierTag.textContent = t(`tier${tier}.tag`);

  const titleEl = document.createElement('h2');
  titleEl.className = 'priority-title';
  titleEl.textContent = t(`tier${tier}.title`);

  const subEl = document.createElement('p');
  subEl.className = 'priority-sub';
  subEl.textContent = t(`tier${tier}.sub`);

  contentWrap.appendChild(tierTag);
  contentWrap.appendChild(titleEl);
  contentWrap.appendChild(subEl);

  banner.appendChild(iconWrap);
  banner.appendChild(contentWrap);
  card.appendChild(banner);

  // 2. Clinical Rationale Summary
  const summarySec = document.createElement('div');
  summarySec.className = 'result-section';

  const summaryHeader = document.createElement('div');
  summaryHeader.className = 'section-header';
  summaryHeader.innerHTML = `${getSvgIcon('stethoscope')}<span class="section-title">${t('section.summary')}</span>`;

  const summaryBody = document.createElement('p');
  summaryBody.className = 'section-body';
  summaryBody.textContent = t(`${proc}.${stage}.summary`);

  summarySec.appendChild(summaryHeader);
  summarySec.appendChild(summaryBody);
  card.appendChild(summarySec);

  // 3. Clinical & Physiological Considerations
  const considerationsSec = document.createElement('div');
  considerationsSec.className = 'result-section';

  const considerationsHeader = document.createElement('div');
  considerationsHeader.className = 'section-header';
  considerationsHeader.innerHTML = `${getSvgIcon('info')}<span class="section-title">${t('section.considerations')}</span>`;

  const considerationsUl = document.createElement('ul');
  considerationsUl.className = 'considerations-list';

  considerationKeys.forEach(cKey => {
    const li = document.createElement('li');
    li.textContent = t(cKey);
    considerationsUl.appendChild(li);
  });

  considerationsSec.appendChild(considerationsHeader);
  considerationsSec.appendChild(considerationsUl);
  card.appendChild(considerationsSec);

  // 4. Questions for Your Doctor or Midwife (Printable Checklist)
  const checklistSec = document.createElement('div');
  checklistSec.className = 'result-section';

  const checklistHeader = document.createElement('div');
  checklistHeader.className = 'section-header';
  checklistHeader.innerHTML = `${getSvgIcon('clipboard')}<span class="section-title">${t('section.checklist')}</span>`;

  const checklistCard = document.createElement('div');
  checklistCard.className = 'checklist-card';

  const checklistIntro = document.createElement('p');
  checklistIntro.className = 'checklist-intro';
  checklistIntro.textContent = t('section.checklist_intro');
  checklistCard.appendChild(checklistIntro);

  const questionsUl = document.createElement('ul');
  questionsUl.className = 'questions-list';

  questionKeys.forEach((qKey, idx) => {
    const li = document.createElement('li');
    const label = document.createElement('label');
    label.className = 'question-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `chk-${proc}-${stage}-${idx}`;

    const textSpan = document.createElement('span');
    textSpan.textContent = t(qKey);

    label.appendChild(checkbox);
    label.appendChild(textSpan);
    li.appendChild(label);
    questionsUl.appendChild(li);
  });
  checklistCard.appendChild(questionsUl);

  // Feature 1: Client Custom Note & Consultation Worksheet Generator (in-memory)
  const worksheetBox = document.createElement('div');
  worksheetBox.className = 'worksheet-notes-box no-print';

  const notesLabel = document.createElement('label');
  notesLabel.className = 'worksheet-notes-label';
  notesLabel.htmlFor = 'client-worksheet-input';
  notesLabel.textContent = t('worksheet.custom_notes_title');

  const notesDesc = document.createElement('div');
  notesDesc.className = 'worksheet-notes-desc';
  notesDesc.textContent = t('worksheet.custom_notes_desc');

  const notesTextarea = document.createElement('textarea');
  notesTextarea.id = 'client-worksheet-input';
  notesTextarea.className = 'worksheet-notes-textarea';
  notesTextarea.placeholder = t('worksheet.custom_notes_placeholder');
  notesTextarea.value = clientCustomNotes;
  notesTextarea.addEventListener('input', (e) => {
    clientCustomNotes = e.target.value;
    const printNotesContent = document.getElementById('print-client-notes-content');
    if (printNotesContent) {
      printNotesContent.textContent = clientCustomNotes.trim() ? clientCustomNotes : '';
      const printBlock = document.getElementById('print-client-notes-block');
      if (printBlock) {
        printBlock.style.display = clientCustomNotes.trim() ? 'block' : 'none';
      }
    }
  });

  worksheetBox.appendChild(notesLabel);
  worksheetBox.appendChild(notesDesc);
  worksheetBox.appendChild(notesTextarea);
  checklistCard.appendChild(worksheetBox);

  // Print button
  const printWrap = document.createElement('div');
  printWrap.className = 'print-btn-wrap';

  const printBtn = document.createElement('button');
  printBtn.type = 'button';
  printBtn.className = 'btn-print';
  printBtn.innerHTML = `${getSvgIcon('printer')}<span>${t('section.print_btn')}</span>`;
  printBtn.addEventListener('click', () => {
    window.print();
  });

  printWrap.appendChild(printBtn);
  checklistCard.appendChild(printWrap);
  checklistSec.appendChild(checklistHeader);
  checklistSec.appendChild(checklistCard);
  card.appendChild(checklistSec);

  // 5. Product Note: Jewellery Materials (Separated - Piercing & Earlobe only)
  if (proc === 'piercing' || proc === 'earlobe') {
    const productSec = document.createElement('div');
    productSec.className = 'result-section';

    const productNoteBox = document.createElement('div');
    productNoteBox.className = 'product-note-section';

    const productTitle = document.createElement('div');
    productTitle.className = 'product-note-title';
    productTitle.innerHTML = `${getSvgIcon('info')}<span>${t('section.product_note_title')}</span>`;

    const productBody = document.createElement('p');
    productBody.className = 'product-note-body';
    productBody.textContent = t('product_note.body');

    productNoteBox.appendChild(productTitle);
    productNoteBox.appendChild(productBody);
    productSec.appendChild(productNoteBox);
    card.appendChild(productSec);
  }

  // 6. Provenance & Clinical Sources
  const provenanceSec = document.createElement('div');
  provenanceSec.className = 'result-section';

  const provenanceHeader = document.createElement('div');
  provenanceHeader.className = 'section-header';
  provenanceHeader.innerHTML = `${getSvgIcon('book')}<span class="section-title">${t('section.provenance')}</span>`;

  const provenanceCard = document.createElement('div');
  provenanceCard.className = 'provenance-card';

  const sourceP = document.createElement('p');
  sourceP.textContent = t(`${proc}.${stage}.source`);
  provenanceCard.appendChild(sourceP);

  // If EU Regulation applies (tattoo pre-conception or PMU pre-conception), verify and link to EUR-Lex
  if (entry.hasEU) {
    const euP = document.createElement('p');
    euP.className = 'eu-link-item';
    euP.textContent = `${t('provenance.eu_instrument_prefix')} `;
    const euA = document.createElement('a');
    euA.href = 'https://eur-lex.europa.eu/eli/reg/2020/2081/oj';
    euA.target = '_blank';
    euA.rel = 'noopener';
    euA.textContent = t('provenance.eu_instrument_name');
    euP.appendChild(euA);
    provenanceCard.appendChild(euP);
  }

  const metaDiv = document.createElement('div');
  metaDiv.className = 'provenance-meta';

  const dateSpan = document.createElement('span');
  dateSpan.className = 'meta-item';
  dateSpan.innerHTML = `<strong>${t('section.meta_reviewed')}</strong> ${t('section.meta_date')}`;

  metaDiv.appendChild(dateSpan);
  provenanceCard.appendChild(metaDiv);

  provenanceSec.appendChild(provenanceHeader);
  provenanceSec.appendChild(provenanceCard);
  card.appendChild(provenanceSec);

  // 7. Print Consultation Sheet Header (visible on printout only)
  const printHeader = document.createElement('div');
  printHeader.className = 'print-only-block print-header';

  const printHeaderRow = document.createElement('div');
  printHeaderRow.className = 'print-header-row';

  const printHeaderTitle = document.createElement('div');
  printHeaderTitle.className = 'print-header-title';
  printHeaderTitle.textContent = `${t('app.title')} | ${t('print.doc_title')}`;

  const printHeaderDate = document.createElement('div');
  printHeaderDate.className = 'print-header-date';
  const now = new Date();
  printHeaderDate.textContent = `${t('print.patient_date')} ${now.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}`;

  printHeaderRow.appendChild(printHeaderTitle);
  printHeaderRow.appendChild(printHeaderDate);

  const printHeaderMeta = document.createElement('div');
  printHeaderMeta.className = 'print-header-meta';
  printHeaderMeta.innerHTML = `<span><strong>${t('form.procedure_label')}:</strong> ${t(`proc.${proc}`)}</span><span><strong>${t('form.stage_label')}:</strong> ${t(`stage.${stage}`)}</span>`;

  printHeader.appendChild(printHeaderRow);
  printHeader.appendChild(printHeaderMeta);

  // 8. Render Print Ruled Area & Client Custom Notes (visible on printout only)
  const printNotesArea = document.createElement('div');
  printNotesArea.className = 'print-only-block print-notes-area';

  // Feature 1: Compiled Client Notes in Printable Worksheet
  const printClientNotesBlock = document.createElement('div');
  printClientNotesBlock.id = 'print-client-notes-block';
  printClientNotesBlock.className = 'print-client-notes-block';
  printClientNotesBlock.style.display = clientCustomNotes.trim() ? 'block' : 'none';

  const printClientNotesTitle = document.createElement('div');
  printClientNotesTitle.className = 'print-client-notes-title';
  printClientNotesTitle.textContent = t('worksheet.print_client_notes_title');

  const printClientNotesContent = document.createElement('div');
  printClientNotesContent.id = 'print-client-notes-content';
  printClientNotesContent.className = 'print-client-notes-content';
  printClientNotesContent.textContent = clientCustomNotes.trim() ? clientCustomNotes : '';

  printClientNotesBlock.appendChild(printClientNotesTitle);
  printClientNotesBlock.appendChild(printClientNotesContent);
  printNotesArea.appendChild(printClientNotesBlock);

  const printNotesHeader = document.createElement('div');
  printNotesHeader.className = 'print-notes-header';

  const printNotesTitle = document.createElement('div');
  printNotesTitle.className = 'print-notes-title';
  printNotesTitle.textContent = t('print.notes_title');

  const printPatientCopy = document.createElement('span');
  printPatientCopy.className = 'print-patient-copy';
  printPatientCopy.textContent = t('print.patient_copy');

  printNotesHeader.appendChild(printNotesTitle);
  printNotesHeader.appendChild(printPatientCopy);
  printNotesArea.appendChild(printNotesHeader);

  // Ruled lines for clinician notes during appointment
  for (let i = 0; i < 3; i++) {
    const line = document.createElement('div');
    line.className = 'print-rule-line';
    printNotesArea.appendChild(line);
  }

  const clinicianRow = document.createElement('div');
  clinicianRow.className = 'print-clinician-row';

  const clinicianSign = document.createElement('span');
  clinicianSign.textContent = t('print.clinician_signature');

  const clinicianGestation = document.createElement('span');
  clinicianGestation.textContent = t('print.gestational_age');

  clinicianRow.appendChild(clinicianSign);
  clinicianRow.appendChild(clinicianGestation);
  printNotesArea.appendChild(clinicianRow);

  const printFooter = document.createElement('div');
  printFooter.className = 'print-only-block print-footer';
  printFooter.textContent = t('print.footer_note');

  // Render into DOM
  resultDiv.innerHTML = '';
  resultDiv.appendChild(printHeader);
  resultDiv.appendChild(card);
  resultDiv.appendChild(printNotesArea);
  resultDiv.appendChild(printFooter);
}

// Mode Navigation Event Listeners
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const mode = btn.getAttribute('data-mode');
    if (!mode || mode === currentMode) return;
    currentMode = mode;
    document.querySelectorAll('.mode-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-mode') === currentMode);
    });
    updateResult();
  });
});

// Event Listeners
procedureSel.addEventListener('change', updateResult);
stageSel.addEventListener('change', updateResult);

if (languageSel) {
  languageSel.value = currentLanguage;
  languageSel.addEventListener('change', () => {
    currentLanguage = languageSel.value;
    document.documentElement.lang = currentLanguage;
    try {
      localStorage.setItem('poli_tools_language', currentLanguage);
    } catch (e) {}
    // Rule 7: Redraw content on language switch while preserving selections
    applyI18n();
    updateResult();
  });
}

// Search & Filter Event Listeners
if (searchInput) {
  searchInput.addEventListener('input', () => {
    currentSearchQuery = searchInput.value;
    if (searchClearBtn) {
      searchClearBtn.hidden = !currentSearchQuery;
    }
    updateResult();
  });
}

if (searchClearBtn) {
  searchClearBtn.addEventListener('click', () => {
    currentSearchQuery = '';
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
    searchClearBtn.hidden = true;
    updateResult();
  });
}

if (searchFilterPills && searchFilterPills.length > 0) {
  searchFilterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const filter = pill.getAttribute('data-filter');
      if (!filter || filter === currentSearchFilter) return;
      currentSearchFilter = filter;
      searchFilterPills.forEach(p => {
        p.classList.toggle('active', p.getAttribute('data-filter') === currentSearchFilter);
      });
      if (currentSearchQuery.trim() !== '') {
        updateResult();
      }
    });
  });
}

// Initial Boot
applyI18n();
updateResult();
