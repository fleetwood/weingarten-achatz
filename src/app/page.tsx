

"use client";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="p-8 bg-background text-foreground">
        <h1 className="mb-4">Weingarten Achatz</h1>
        <p className="text-xl mb-6">Color System Demo</p>
      </section>
      
      {/* Semantic Colors */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        <div className="p-6 rounded-lg bg-primary text-primary-foreground">
          <h3 className="mb-2">Primary</h3>
          <p>Primary color with foreground text</p>
          <div className="mt-4 p-2 bg-background text-foreground rounded text-sm">
            bg-primary / text-primary-foreground
          </div>
        </div>
        
        <div className="p-6 rounded-lg bg-secondary text-secondary-foreground">
          <h3 className="mb-2">Secondary</h3>
          <p>Secondary color with foreground text</p>
          <div className="mt-4 p-2 bg-background text-foreground rounded text-sm">
            bg-secondary / text-secondary-foreground
          </div>
        </div>
        
        <div className="p-6 rounded-lg bg-accent text-accent-foreground">
          <h3 className="mb-2">Accent</h3>
          <p>Accent color with foreground text</p>
          <div className="mt-4 p-2 bg-background text-foreground rounded text-sm">
            bg-accent / text-accent-foreground
          </div>
        </div>
        
        <div className="p-6 rounded-lg bg-muted text-muted-foreground">
          <h3 className="mb-2">Muted</h3>
          <p>Muted color with foreground text</p>
          <div className="mt-4 p-2 bg-background text-foreground rounded text-sm">
            bg-muted / text-muted-foreground
          </div>
        </div>
        
        <div className="p-6 rounded-lg bg-destructive text-destructive-foreground">
          <h3 className="mb-2">Destructive</h3>
          <p>Destructive color with foreground text</p>
          <div className="mt-4 p-2 bg-background text-foreground rounded text-sm">
            bg-destructive / text-destructive-foreground
          </div>
        </div>
        
        <div className="p-6 rounded-lg bg-alt text-alt-foreground">
          <h3 className="mb-2">Alt</h3>
          <p>Alt color with foreground text</p>
          <div className="mt-4 p-2 bg-background text-foreground rounded text-sm">
            bg-alt / text-alt-foreground
          </div>
        </div>
      </section>
      
      {/* Brand Colors */}
      <section className="p-8">
        <h2 className="mb-4">Brand Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-lg bg-licorice text-silver">
            <h3 className="mb-2">Licorice</h3>
            <p>Base brand color</p>
            <div className="mt-4 p-2 bg-background text-foreground rounded text-sm">
              bg-licorice
            </div>
          </div>
          
          <div className="p-6 rounded-lg bg-wenge text-silver">
            <h3 className="mb-2">Wenge</h3>
            <p>Base brand color</p>
            <div className="mt-4 p-2 bg-background text-foreground rounded text-sm">
              bg-wenge
            </div>
          </div>
          
          <div className="p-6 rounded-lg bg-silver text-licorice">
            <h3 className="mb-2">silver</h3>
            <p>Base brand color</p>
            <div className="mt-4 p-2 bg-background text-foreground rounded text-sm">
              bg-silver
            </div>
          </div>
          
          <div className="p-6 rounded-lg bg-platinum text-licorice">
            <h3 className="mb-2">Platinum</h3>
            <p>Base brand color</p>
            <div className="mt-4 p-2 bg-background text-foreground rounded text-sm">
              bg-platinum
            </div>
          </div>
          
          <div className="p-6 rounded-lg bg-indian-red text-silver">
            <h3 className="mb-2">Indian Red</h3>
            <p>Base brand color</p>
            <div className="mt-4 p-2 bg-background text-foreground rounded text-sm">
              bg-indian-red
            </div>
          </div>
          
          <div className="p-6 rounded-lg bg-turkey-red text-silver">
            <h3 className="mb-2">Turkey Red</h3>
            <p>Base brand color</p>
            <div className="mt-4 p-2 bg-background text-foreground rounded text-sm">
              bg-turkey-red
            </div>
          </div>
          
          <div className="p-6 rounded-lg bg-golden-brown text-silver">
            <h3 className="mb-2">Golden Brown</h3>
            <p>Base brand color</p>
            <div className="mt-4 p-2 bg-background text-foreground rounded text-sm">
              bg-golden-brown
            </div>
          </div>
        </div>
      </section>

      {/* Dark Mode Toggle */}
      <section className="p-8 text-center">
        <button 
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
          onClick={() => {
            document.documentElement.classList.toggle('dark');
          }}
        >
          Toggle Dark Mode
        </button>
        <p className="mt-2 text-sm">Click to toggle between light and dark mode</p>
      </section>
    </main>
  );
}
