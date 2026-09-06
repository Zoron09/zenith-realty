export default function Footer() {
  return (
    <footer className="border-t border-brand-border/60 py-12 mt-24">
      <div className="max-w-wrap mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-brand-gray">
        <p>© 2026 Zenith Realty. All premium architectural templates curated globally.</p>
        <div className="flex space-x-6">
          <a href="#privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
