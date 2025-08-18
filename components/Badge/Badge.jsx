export default function Badge({shape = 'square', color = 'gray', children}){
    const colorOptions= {
        red: {background:"#FEE2E2",text:"#991B1B" },
        gray: {background:"#F3F4F6",text:"#1F2937" },
        yellow: {background:"#FEF3C7", text:"#92400E" },
        green: {background:"#D1FAE5", text:"#065F46" },
        blue: {background:"#DBEAFE",text:"#1E40AF" },
        indigo: {background:"#E0E7FF",text:"#3730A3" },
        purple: {background:"#EDE9FE",text:"#5B21B6" },
        pink: {background:"#FCE7F3",text:"#9D174D" },
    }
    const chosenColor = colorOptions[color] || colorOptions.gray
    const badgeStyle ={
        color: chosenColor.text,
        background: chosenColor.background,
        borderRadius: shape === 'pill' ? '16px' : '0px',
        padding: "0px 14px",    
        display: "inline-block",
        fontSize: "0.85rem",
    }
    
    return(
        <span style={badgeStyle}>
          {children}
        </span>
    )
}