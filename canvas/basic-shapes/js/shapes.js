(function(){

    const contextType = "2d";
    const fontConfig = {
        style: "30px serif",
        color: "black",
        position: [0, 174]
    };

    const drawSquareOrRectangle = (id, config, color) => {

        const canvas = document.getElementById(id);
        if(!canvas.getContext) {
            // canvas unsupported
            return;
        }
    
        const ctx = canvas.getContext(contextType);
        ctx.fillStyle = color;

        // fillRect inputs - (x, y, w, h)
        ctx.fillRect(config.x, config.y, config.w, config.h);

        ctx.font = fontConfig.style;
        ctx.fillStyle = fontConfig.color;
        ctx.fillText(id, fontConfig.position[0], fontConfig.position[1]);
    }

    const drawTriangle = (id, config, color) => {

        const canvas = document.getElementById(id);
        if(!canvas.getContext) {
            // canvas unsupported
            return;
        }

        const ctx = canvas.getContext(contextType);
        ctx.fillStyle = color;

        ctx.beginPath();

        for(let [i, elem] of config.entries()) {

            if(i === 0)
                // moveTo inputs - (x, y)
                ctx.moveTo(elem[0], elem[1])
            else
                // lineTo inputs - (x, y)
                ctx.lineTo(elem[0], elem[1])
        };
        
        ctx.fill();

        ctx.font = fontConfig.style;
        ctx.fillStyle = fontConfig.color;
        ctx.fillText(id, fontConfig.position[0], fontConfig.position[1]);
    }

    const drawCircleOrSemiCircle = (id, config, color) => {
        const canvas = document.getElementById(id);
        if(!canvas.getContext) {
            // canvas unsupported
            return;
        }

        const ctx = canvas.getContext(contextType);
        ctx.fillStyle = color;

        ctx.beginPath();
        
        // arc inputs - (x, y, radius, startAngle, endAngle)
        ctx.arc(config.x, config.y, config.radius, config.startAngle, config.endAngle);
        ctx.fill();

        ctx.font = fontConfig.style;
        ctx.fillStyle = fontConfig.color;
        ctx.fillText(id, fontConfig.position[0], fontConfig.position[1]);
    }

    const drawOval = (id, config, color) => {
        const canvas = document.getElementById(id);
        if(!canvas.getContext) {
            // canvas unsupported
            return;
        }

        const ctx = canvas.getContext(contextType);
        ctx.fillStyle = color;

        // Draw the ellipse
        ctx.beginPath();

        // arc inputs - (x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockWise?)
        ctx.ellipse(config.x, config.y, config.radiusX, config.radiusY, config.rotation, config.startAngle, config.endAngle);
        ctx.fill();

        ctx.font = fontConfig.style;
        ctx.fillStyle = fontConfig.color;
        ctx.fillText(id, fontConfig.position[0], fontConfig.position[1]);
    }
    const drawDiamong = (id, config, color) => {
        const canvas = document.getElementById(id);
        if(!canvas.getContext) {
            // canvas unsupported
            return;
        }

        const ctx = canvas.getContext(contextType);
        ctx.fillStyle = color;

        ctx.beginPath();

        for(let [i, elem] of config.entries()) {

            if(i === 0)
                // moveTo inputs - (x, y)
                ctx.moveTo(elem[0], elem[1])
            else
                // lineTo inputs - (x, y)
                ctx.lineTo(elem[0], elem[1])
        };
        ctx.closePath();
        ctx.fill();

        ctx.font = fontConfig.style;
        ctx.fillStyle = fontConfig.color;
        ctx.fillText(id, fontConfig.position[0], fontConfig.position[1]);
    }

    const init = () => {

        const squareConfig = {
            x: 0,
            y: 0,
            w: 150,
            h: 150
        };
        drawSquareOrRectangle("square", squareConfig, "red");

        const rectangleConfig = {
            x: 0,
            y: 0,
            w: 150,
            h: 75
        };
        drawSquareOrRectangle("rectangle", rectangleConfig, "yellow");

        const matrixTrianglePoints = [
            [0, 150],
            [75, 0],
            [150, 150]
        ];
        drawTriangle("triangle", matrixTrianglePoints, "blue");

        
        const circleConfig = {
            x: 75,
            y: 75,
            radius: 75,
            startAngle: 0,
            endAngle: 2 * Math.PI
        };
        drawCircleOrSemiCircle("circle", circleConfig, "green");
        
        const semiCircleConfig = {
            x: 75,
            y: 75,
            radius: 75,
            startAngle: 0,
            endAngle: Math.PI
        };
        drawCircleOrSemiCircle("semi-circle", semiCircleConfig, "purple");

        const ovalConfig = {
            x: 75,
            y: 75,
            radiusX: 50,
            radiusY: 75,
            rotation: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI
        };
        drawOval("oval", ovalConfig, "orange");

        const matrixDiamongPoints = [
            [75, 150],
            [0, 75],
            [75, 0],
            [150, 75]
        ];
        drawDiamong("diamond", matrixDiamongPoints, "pink");
    }

    window.addEventListener("load", init);
})();