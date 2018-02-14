precision mediump float;
varying vec2 vTextureCoord;

uniform float time;
uniform sampler2D uSampler;
uniform sampler2D currentimage;




void main(void) {
	vec2 uv = vTextureCoord;
	float mytime = time;


	vec4 currentimage = texture2D(currentimage, vec2(uv.x - (1.-mytime),uv.y*1.5));
;
	gl_FragColor = vec4(all,0.0);
}