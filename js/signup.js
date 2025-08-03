// Supabase config
const supabaseUrl = 'https://Upstage Studios.supabase.co';
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dmdkZHZidmh3d2xnbXhrY2xxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyMDk4MzIsImV4cCI6MjA2OTc4NTgzMn0.bMsUOlvC46hyKmDyMtl33iCRkTzRk_NQm5OEqb0GDoc;
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
