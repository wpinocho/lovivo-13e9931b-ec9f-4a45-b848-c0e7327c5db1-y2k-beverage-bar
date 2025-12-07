export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 y2k-gradient rounded-lg flex items-center justify-center">
          <span className="text-background font-black text-xl">Z</span>
        </div>
        <div>
          <div className="font-black text-lg leading-tight">
            <span className="y2k-text-gradient">ZERO</span>
            <span className="text-foreground">-PROOF</span>
          </div>
          <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider">
            Bar
          </div>
        </div>
      </div>
    </a>
  )
}