// Supabase config
const supabaseUrl = 'https://YOUR_PROJECT_ID.supabase.co';
const supabaseKey = 'YOUR_PUBLIC_ANON_KEY';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Handle form submission
document.querySelector('.signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const first_name = e.target.first_name.value;
  const last_name = e.target.last_name.value;
  const email = e.target.email.value;
  const phone = e.target.phone.value;
  const password = e.target.password.value;

  const { error } = await supabase.from('users').insert([
    { first_name, last_name, email, phone, password }
  ]);

  if (error) {
    alert('Signup failed: ' + error.message);
  } else {
    window.location.href = 'confirmation.html';
  }
});
