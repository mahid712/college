import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../scss/ScholarshipPortal.scss';

const databaseUrl = 'https://mgm-scholarship-default-rtdb.asia-southeast1.firebasedatabase.app';
const maxFileSize = 300 * 1024;

const scholarshipOptions = [
  {
    label: 'Government & Departmental Scholarships',
    options: [
      ['CV Raman Scholarship', 'CV Raman Scholarship (DCE)'],
      ['INSPIRE Scholarship', 'INSPIRE Scholarship (DST)'],
      ['KSTA Fellowship', 'KSTA (Karnataka Science & Tech) Fellowship'],
      ['Sanchi Honnamma Scholarship', 'Sanchi Honnamma Scholarship'],
      ['Service Personnel Concession', 'Educational Concession (Service Personnel Children)'],
      ['Ex-Servicemen Concession', 'Educational Concession (Ex-Servicemen Children)'],
      ['Beedi Workers Scholarship', 'Beedi Workers Scholarship'],
      ['National Merit Scholarship', 'Govt. India National Merit Scholarship'],
      ['Sanskrit Sansthan Scholarship', 'Rashtriya Sanskrit Sansthan Scholarship'],
      ['Major Subjects Scholarship', 'English/Kannada Major Subject Scholarship'],
      ['Hindi Scholarship', 'Govt. India Hindi Scholarship'],
      ['Differently Abled Scholarship', 'Scholarship for Differently Abled Students'],
      ['Minority BCM/BCT', 'Minority Scholarship (BCM/BCT)'],
      ['SC/ST Scholarship', 'SC/ST Scholarship'],
      ['MHRD Scholarship', 'M.H.R.D Scholarship'],
    ],
  },
  {
    label: 'Endowment & Memorial Scholarships',
    options: [
      ['LIC Golden Jubilee', 'LIC Golden Jubilee Scholarship'],
      ['Rajiv Gandhi Loan', 'Rajiv Gandhi Loan Scholarship'],
      ['Sir Krishna R Haldipurkar', 'Sir Krishna R. Haldipurkar Scholarship'],
      ['Sri TA Pai Book', 'Sri. T.A. Pai Book Scholarship'],
      ['Sri M Vittal Kamath', 'Sri. M. Vittal Kamath Memorial Scholarship'],
      ['Late Sri Aroor Laxminarayana', 'Late Sri Aroor Laxminarayana Rao Scholarship'],
      ['MGM Co-operative Store', 'M.G.M Co-operative Store Ltd. Scholarship'],
      ['HH Sri Vishnuthirtha', 'H.H. Sri Vishnuthirtha Memorial Scholarship'],
      ['Dr TMA Pai Benevolent', 'Dr. T.M.A. Pai Benevolent Trust Fund'],
      ['Vakil Ramanath Pai', 'Late Vakil Ramanath Pai & Kalyani Pai Memorial'],
    ],
  },
  {
    label: 'Proficiency Prizes & Awards',
    options: [
      ['Dr TMA Pai Gold Medal', 'Dr. T.M.A. Pai Gold Medal'],
      ['Corporation Bank Gold', 'Corporation Bank Gold Medal'],
      ['Prof KS Haridasa Bhat Gold', 'Prof. K.S. Haridasa Bhat Gold Medal'],
      ['MGM Staff Club', 'M.G.M College Staff Club Endowment'],
    ],
  },
];

const documentFields = [
  { id: 'file_photo', label: 'Passport Size Photo', accept: 'image/*', required: true },
  { id: 'file_income', label: 'Income Certificate', accept: '.pdf,.jpg', required: true },
  { id: 'file_caste', label: 'Caste Certificate', accept: '.pdf,.jpg', required: true },
  { id: 'file_adhaar', label: 'Aadhaar Card', accept: '.pdf,.jpg', required: true },
  { id: 'file_bank', label: 'Bank Passbook Copy', accept: '.pdf,.jpg', required: true },
  { id: 'file_marks', label: 'Previous Year Marks Cards', accept: '.pdf,.jpg', required: true },
  { id: 'file_id', label: 'Current Fee Receipt/ID', accept: '.pdf,.jpg', required: true },
  { id: 'file_tc', label: 'Transfer Certificate (optional)', accept: '.pdf,.jpg', required: false },
];

const steps = [
  'Personal & Community',
  'Document Upload',
  'Final Submission',
];

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error(`Could not read ${file.name}. Please select the file again.`));
    reader.readAsDataURL(file);
  });
}

function ScholarshipPortal({ isDarkMode, onToggleTheme }) {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({ name: '', community: '', scholarship: '' });
  const [selectedFiles, setSelectedFiles] = useState({});
  const [validationErrors, setValidationErrors] = useState({});
  const [portalOpen, setPortalOpen] = useState(null);
  const [portalStatus, setPortalStatus] = useState('checking');
  const [portalCheckError, setPortalCheckError] = useState('');
  const [submissionError, setSubmissionError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [statusCheckAttempt, setStatusCheckAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function checkPortalStatus() {
      try {
        const response = await fetch(`${databaseUrl}/settings/portalOpen.json`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(`Portal status request failed (${response.status}).`);
        }

        const isOpen = await response.json();
        setPortalOpen(isOpen);
        setPortalStatus(isOpen === false ? 'closed' : 'open');
        setPortalCheckError('');
      } catch (error) {
        if (error.name !== 'AbortError') {
          setPortalStatus('unavailable');
          setPortalCheckError('The portal availability could not be verified. Retry the check before submitting.');
        }
      }
    }

    checkPortalStatus();
    return () => controller.abort();
  }, [statusCheckAttempt]);

  const handleValueChange = (event) => {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({ ...currentValues, [name]: value }));
    setValidationErrors((currentErrors) => ({ ...currentErrors, [name]: '' }));
  };

  const handleFileChange = (event, field) => {
    const file = event.target.files[0];
    if (!file) {
      setSelectedFiles((currentFiles) => ({ ...currentFiles, [field.id]: null }));
      setValidationErrors((currentErrors) => ({ ...currentErrors, [field.id]: '' }));
      return;
    }

    if (file.size > maxFileSize) {
      event.target.value = '';
      setSelectedFiles((currentFiles) => ({ ...currentFiles, [field.id]: null }));
      setValidationErrors((currentErrors) => ({
        ...currentErrors,
        [field.id]: `File is ${Math.ceil(file.size / 1024)} KB. The maximum allowed size is 300 KB.`,
      }));
      return;
    }

    setSelectedFiles((currentFiles) => ({ ...currentFiles, [field.id]: file }));
    setValidationErrors((currentErrors) => ({ ...currentErrors, [field.id]: '' }));
  };

  const moveToStep = (nextStep) => {
    const errors = {};

    if (step === 1) {
      if (!formValues.name.trim()) errors.name = 'Please enter your full name.';
      if (!formValues.community) errors.community = 'Please select your community category.';
      if (!formValues.scholarship) errors.scholarship = 'Please select a scholarship category.';
    }

    if (step === 2) {
      documentFields.forEach((field) => {
        if (validationErrors[field.id]) {
          errors[field.id] = validationErrors[field.id];
        } else if (field.required && !selectedFiles[field.id]) {
          errors[field.id] = 'Please choose this required document.';
        }
      });
    }

    setValidationErrors((currentErrors) => ({ ...currentErrors, ...errors }));
    if (Object.keys(errors).length === 0) {
      setStep(nextStep);
      setSubmissionError('');
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (portalStatus !== 'open' || portalOpen === false) return;

    const declarationCheckbox = event.currentTarget.querySelector('#confirm');
    if (!declarationCheckbox.checked) {
      setValidationErrors((currentErrors) => ({
        ...currentErrors,
        confirm: 'You must agree to the terms before submitting.',
      }));
      declarationCheckbox.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmissionError('');

    try {
      const docs = {};
      const documentKeys = {
        file_photo: 'photo',
        file_income: 'income',
        file_caste: 'caste',
        file_adhaar: 'adhaar',
        file_bank: 'bank',
        file_marks: 'marks',
        file_id: 'id_card',
        file_tc: 'tc',
      };

      await Promise.all(documentFields.map(async (field) => {
        const file = selectedFiles[field.id];
        docs[documentKeys[field.id]] = file ? await readFileAsDataUrl(file) : null;
      }));

      const response = await fetch(`${databaseUrl}/scholarship_submissions.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formValues.name.trim(),
          community: formValues.community,
          scholarshipType: formValues.scholarship,
          timestamp: { '.sv': 'timestamp' },
          docs,
        }),
      });

      if (!response.ok) {
        throw new Error(`Application submission failed (${response.status}). Please try again.`);
      }

      setIsSubmitted(true);
      window.scrollTo(0, 0);
    } catch (error) {
      setSubmissionError(error.message || 'Application submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (portalOpen === false) {
    return (
      <div className="scholarship-portal">
        <header className="portal-header">
          <div>
            <h1>MGM SCHOLARSHIP PORTAL</h1>
            <small>Student Financial Aid &amp; Endowment Management</small>
          </div>
          <div className="portal-header-actions">
            <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
            <Link to="/scholarships">Exit Portal</Link>
          </div>
        </header>
        <main className="portal-closed">
          <div className="portal-closed-card">
            <span aria-hidden="true">📅</span>
            <h2>Applications Closed</h2>
            <p>The MGM Scholarship portal is currently closed.</p>
            <Link to="/scholarships">Return to Scholarships</Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="scholarship-portal">
      <header className="portal-header">
        <div>
          <h1>MGM SCHOLARSHIP PORTAL</h1>
          <small>Student Financial Aid &amp; Endowment Management</small>
        </div>
        <div className="portal-header-actions">
          <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
          <Link to="/scholarships">Exit Portal</Link>
        </div>
      </header>

      <div className="dashboard-container">
        <aside className="side-panel">
          <h2>Application Progress</h2>
          <span className="status-badge">Step {step} of 3</span>
          <ol className="step-list">
            {steps.map((stepTitle, index) => {
              const stepNumber = index + 1;
              const state = stepNumber === step ? 'active' : stepNumber < step ? 'completed' : '';
              return (
                <li className={`step-item ${state}`} key={stepTitle}>
                  <span className="step-number">{stepNumber < step ? '✓' : stepNumber}</span>
                  {stepTitle}
                </li>
              );
            })}
          </ol>
          <hr />
          <p className="file-size-note"><strong>Note:</strong> All uploaded documents must be under 300 KB.</p>
        </aside>

        <main className="main-form">
          {portalCheckError && <p className="portal-status-warning" role="status">{portalCheckError}</p>}
          {isSubmitted ? (
            <section className="submission-success" role="status">
              <span aria-hidden="true">✓</span>
              <h2>Application Submitted</h2>
              <p>Your scholarship application has been received. Thank you.</p>
              <Link to="/scholarships">Return to Scholarships</Link>
            </section>
          ) : (
            <form noValidate onSubmit={handleSubmit}>
              {step === 1 && (
                <section className="form-step">
                  <h2>Step 1: Community &amp; Category Details</h2>
                  <div className="form-section">
                    <label htmlFor="name">Full Name (as per Aadhaar) <span>*</span></label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formValues.name}
                      placeholder="Enter your full name"
                      aria-invalid={Boolean(validationErrors.name)}
                      onChange={handleValueChange}
                    />
                    {validationErrors.name && <p className="error-txt">{validationErrors.name}</p>}

                    <label htmlFor="community">Community Category <span>*</span></label>
                    <select
                      id="community"
                      name="community"
                      value={formValues.community}
                      aria-invalid={Boolean(validationErrors.community)}
                      onChange={handleValueChange}
                    >
                      <option value="">-- Select Community --</option>
                      <option value="gsb">G.S.B (Konkani Speaking)</option>
                      <option value="brahmin">Brahmin (Adiga/Pejathaya Prizes)</option>
                      <option value="madhwa">Madhwa Brahmin (Chokkady Prize)</option>
                      <option value="minority">Minority (Muslim/Christian)</option>
                      <option value="scst">SC / ST</option>
                      <option value="general">General Merit</option>
                    </select>
                    {validationErrors.community && <p className="error-txt">{validationErrors.community}</p>}

                    <label htmlFor="scholarship">Scholarship Category <span>*</span></label>
                    <select
                      id="scholarship"
                      name="scholarship"
                      value={formValues.scholarship}
                      aria-invalid={Boolean(validationErrors.scholarship)}
                      onChange={handleValueChange}
                    >
                      <option value="">-- Select Scholarship --</option>
                      {scholarshipOptions.map((group) => (
                        <optgroup label={group.label} key={group.label}>
                          {group.options.map(([value, label]) => (
                            <option value={value} key={value}>{label}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    {validationErrors.scholarship && <p className="error-txt">{validationErrors.scholarship}</p>}
                  </div>
                  <div className="btn-group">
                    <span />
                    <button type="button" className="btn btn-next" onClick={() => moveToStep(2)}>
                      Next: Upload Documents <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </section>
              )}

              {step === 2 && (
                <section className="form-step">
                  <h2>Step 2: Financial &amp; Academic Verification</h2>
                  <p className="required-note">* Required documents must be under 300 KB.</p>
                  <div className="upload-grid">
                    {documentFields.map((field) => (
                      <div
                        className={`file-input-wrapper ${validationErrors[field.id] ? 'input-error' : ''}`}
                        key={field.id}
                      >
                        <label htmlFor={field.id}>
                          {field.label}{field.required && <span> *</span>}
                        </label>
                        <input
                          id={field.id}
                          type="file"
                          accept={field.accept}
                          aria-invalid={Boolean(validationErrors[field.id])}
                          onChange={(event) => handleFileChange(event, field)}
                        />
                        {selectedFiles[field.id] && (
                          <small className="selected-file">{selectedFiles[field.id].name}</small>
                        )}
                        {validationErrors[field.id] && <p className="error-txt">{validationErrors[field.id]}</p>}
                      </div>
                    ))}
                  </div>
                  <div className="btn-group">
                    <button type="button" className="btn btn-prev" onClick={() => setStep(1)}>Back</button>
                    <button type="button" className="btn btn-next" onClick={() => moveToStep(3)}>
                      Next: Final Review
                    </button>
                  </div>
                </section>
              )}

              {step === 3 && (
                <section className="form-step">
                  <h2>Step 3: Declaration &amp; Submission</h2>
                  <div className="declaration">
                    <p>I hereby declare that the information provided is true to the best of my knowledge.</p>
                  </div>
                  <label className="confirm-label" htmlFor="confirm">
                    <input
                      id="confirm"
                      name="confirm"
                      type="checkbox"
                      onChange={() => setValidationErrors((currentErrors) => ({ ...currentErrors, confirm: '' }))}
                    />
                    I agree to the terms and conditions.
                  </label>
                  {validationErrors.confirm && <p className="error-txt">{validationErrors.confirm}</p>}

                  <div className="btn-group">
                    <button type="button" className="btn btn-prev" onClick={() => setStep(2)}>Back</button>
                  </div>
                  {portalStatus === 'checking' && (
                    <p className="portal-status-warning" role="status">
                      Checking whether applications are open. Please wait before submitting.
                    </p>
                  )}
                    {portalStatus === 'unavailable' && (
                      <button
                        type="button"
                        className="btn btn-prev retry-status"
                        onClick={() => {
                          setPortalStatus('checking');
                          setStatusCheckAttempt((attempt) => attempt + 1);
                        }}
                      >
                        Retry portal status check
                      </button>
                    )}
                  {submissionError && <p className="submission-error" role="alert">{submissionError}</p>}
                  <button
                    type="submit"
                    className="btn btn-submit"
                    disabled={isSubmitting || portalStatus !== 'open' || portalOpen === false}
                  >
                    {isSubmitting ? 'Uploading documents...' : 'Submit Application to MGM College'}
                  </button>
                </section>
              )}
            </form>
          )}
        </main>
      </div>
    </div>
  );
}

export default ScholarshipPortal;
