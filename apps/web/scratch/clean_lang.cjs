const fs = require('fs');
const path = 'c:/Users/LexS/Downloads/anything (1)/anything/apps/web/src/app/page.jsx';
let content = fs.readFileSync(path, 'utf8');

// Replace featureList retrieval
content = content.replace(
  'const featureList = CLINICAL_DEPARTMENTS[lang] || CLINICAL_DEPARTMENTS["fr"];',
  'const featureList = CLINICAL_DEPARTMENTS;'
);

// Replace booking instructions paragraph
const bookingInstructions = `{lang === "ar"
                ? "أرسل معلوماتك واستفسارك وسيتصل بك طاقمنا الطبي لتأكيد الموعد وإرشادك قبل الفحص."
                : lang === "en"
                  ? "Submit your inquiry. Our clinical secretariat will contact you to review your request, provide information, and confirm your slot."
                  : "Soumettez votre demande. Notre secrétariat médical vous contactera pour valider vos examens, vous renseigner et planifier votre rendez-vous."}`;
content = content.replace(bookingInstructions, '"Soumettez votre demande. Notre secrétariat médical vous contactera pour valider vos examens, vous renseigner et planifier votre rendez-vous."');

// Replace booking success message
const successMessage = `{lang === "ar"
                    ? "نشكرك على ثقتك. سيتصل بك أحد أطبائنا أو ممرضينا في غضون دقائق قليلة لمتابعة طلبك."
                    : lang === "en"
                      ? "Thank you. One of our pathobiologists or clinical technicians will call you back shortly to assist you."
                      : "Merci pour votre confiance. Un membre de notre équipe médicale vous rappellera dans les plus brefs délais pour finaliser votre dossier."}`;
content = content.replace(successMessage, '"Merci pour votre confiance. Un membre de notre équipe médicale vous rappellera dans les plus brefs délais pour finaliser votre dossier."');

// Replace booking form selections
content = content.replace('{lang === "ar" ? "تحاليل أمراض الدم" : "Hématologie & Coagulation"}', '"Hématologie & Coagulation"');
content = content.replace('{lang === "ar" ? "الكيمياء الحيوية" : "Biochimie & Métabolisme"}', '"Biochimie & Métabolisme"');
content = content.replace('{lang === "ar" ? "المناعة والهرمونات" : "Immunologie & Hormonologie"}', '"Immunologie & Hormonologie"');
content = content.replace('{lang === "ar" ? "الأحياء الدقيقة" : "Microbiologie & Bactériologie"}', '"Microbiologie & Bactériologie"');
content = content.replace('{lang === "ar" ? "طلب سحب دم من المنزل" : "Prélèvement à domicile"}', '"Prélèvement à domicile"');
content = content.replace('{lang === "ar" ? "استفسار طبي آخر" : "Autre demande d\'informations"}', '"Autre demande d\'informations"');

// Replace textarea placeholder
const textareaPlaceholder = `placeholder={
                      lang === "ar"
                        ? "اكتب هنا قائمة التحاليل المطلوبة أو استفساراتك حول شروط الفحص..."
                        : "Indiquez ici vos questions ou les examens prescrits par votre médecin..."
                    }`;
content = content.replace(textareaPlaceholder, 'placeholder="Indiquez ici vos questions ou les examens prescrits par votre médecin..."');

// Replace standard biologiste quote
const quoteBlock = `{lang === "ar"
                    ? "«التزامنا الأساسي هو تقديم نتائج بيولوجية موثوقة لمساعدة الأطباء في اتخاذ أفضل القرارات العلاجية.»"
                    : lang === "en"
                      ? "“Our primary commitment is delivering reliable biological reports to support clinical decisions with speed and accuracy.”"
                      : "« Notre engagement fondamental est de fournir des rapports biologiques précis afin de soutenir les décisions cliniques avec réactivité. »"}`;
content = content.replace(quoteBlock, '"« Notre engagement fondamental est de fournir des rapports biologiques précis afin de soutenir les décisions cliniques avec réactivité. »"');

// Replace gallery caption
const galleryCaption = `{lang === "ar" 
                      ? "المرافق الطبية المعتمدة في أكدال" 
                      : lang === "en" 
                        ? "Accredited Clinical Facilities in Agdal" 
                        : "Plateau Technique & Accueil de Référence à Agdal"}`;
content = content.replace(galleryCaption, '"Plateau Technique & Accueil de Référence à Agdal"');

// Replace search heading
content = content.replace(
  '{lang === "ar" ? "ابحث في دليل تحاليل المختبر" : lang === "en" ? "Search our clinical analyses catalogue" : "Rechercher un examen de biologie"}',
  '"Rechercher un examen de biologie"'
);

// Replace search placeholder
const searchPlaceholder = `placeholder={
                  lang === "ar"
                    ? "ابحث باسم التحليل أو الكود..."
                    : lang === "en"
                      ? "Search analysis or code..."
                      : "Rechercher un test ou code..."
                }`;
content = content.replace(searchPlaceholder, 'placeholder="Rechercher un test ou code..."');

// Replace reviews verified patient badge
content = content.replace('{lang === "ar" ? "حساب موثق" : "Verified Patient"}', '"Patient vérifié"');

// Replace hours list loops in footer and contact sections
content = content.replace('h[lang] || h["fr"]', 'h.fr');
content = content.replace('h[lang] || h["fr"]', 'h.fr');

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully cleaned up all multilingual branches!');
