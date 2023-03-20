import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://wnatgicqupkotyzxbqaw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduYXRnaWNxdXBrb3R5enhicWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxNDI4OTYsImV4cCI6MTk5MzcxODg5Nn0.KObBKMvujQ9arW8kmDui0Wcud3LkRvrjDaG3six5aSo'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
  let { data: books, error } = await supabase
  .from('books')
  .select('*')

  for (let book of books) {
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<li>${book.title} - ${book.author} - ${book.ISBN}</li>`;
  }
}

getBooks();

