import { useState, useRef } from "react"
import LiquidGlass from "liquid-glass-react"
import { LogOutIcon, Github } from "lucide-react"

export default function App() {
  // User Info Card Controls
  const [displacementScale, setDisplacementScale] = useState(100)
  const [blurAmount, setBlurAmount] = useState(0.5)
  const [saturation, setSaturation] = useState(140)
  const [aberrationIntensity, setAberrationIntensity] = useState(2)
  const [elasticity, setElasticity] = useState(0)
  const [cornerRadius, setCornerRadius] = useState(32)
  const [userInfoOverLight, setUserInfoOverLight] = useState(false)
  const [userInfoMode, setUserInfoMode] = useState<"standard" | "polar" | "prominent" | "shader">("standard")
  const [userInfoDark, setUserInfoDark] = useState(false)

  // Log Out Button Controls
  const [logoutDisplacementScale, setLogoutDisplacementScale] = useState(64)
  const [logoutBlurAmount, setLogoutBlurAmount] = useState(0.1)
  const [logoutSaturation, setLogoutSaturation] = useState(130)
  const [logoutAberrationIntensity, setLogoutAberrationIntensity] = useState(2)
  const [logoutElasticity, setLogoutElasticity] = useState(0.35)
  const [logoutCornerRadius, setLogoutCornerRadius] = useState(100)
  const [logoutOverLight, setLogoutOverLight] = useState(false)
  const [logoutMode, setLogoutMode] = useState<"standard" | "polar" | "prominent" | "shader">("standard")
  const [logoutDark, setLogoutDark] = useState(false)

  // Shared state
  const [activeTab, setActiveTab] = useState<"userInfo" | "logOut">("userInfo")
  const containerRef = useRef<HTMLDivElement>(null)

  const [scroll, setScroll] = useState(0)

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    requestAnimationFrame(() => {
      setScroll((event?.target as any)?.scrollTop)
    })
  }

  const scrollingOverBrightSection = scroll > 230 && scroll < 500

  return (
    <div
      className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-3 shadow-2xl w-full max-w-5xl mx-auto md:my-10 h-screen md:max-h-[calc(100vh-5rem)] md:rounded-3xl overflow-hidden font-sans"
    >
      {/* Left Panel - Glass Effect Demo */}
      <div className="flex-1 relative overflow-auto min-h-screen md:col-span-2" ref={containerRef} onScroll={handleScroll}>
        <div className="w-full min-h-[200vh] absolute top-0 left-0 pb-96 mb-96">
          <img src="https://picsum.photos/2000/2000" className="w-full h-96 object-cover" />
          <div className="flex flex-col gap-2" id="bright-section">
            <h2 className="text-2xl font-semibold my-5 text-center">这是一个标题</h2>
            <p className="px-10">
              这是一段示例文本，用于展示液体玻璃效果在文本内容上的视觉表现。<br />
              玻璃质感会根据背景图像产生折射、模糊和色彩变化，营造出通透的视觉效果。
              <br />
              你可以滚动页面，观察玻璃卡片在不同明暗背景下的表现。
              <br />
              液体玻璃是一种非常现代且富有质感的 UI 设计语言，
              <br />
              它结合了磨砂玻璃的模糊感与液态金属的光泽感。
              <br />
              Apple 在其最新的系统 UI 中大量采用了类似的设计语言。
            </p>
          </div>
          <img src="https://picsum.photos/1200/1200" className="w-full h-80 object-cover my-10" />
          <img src="https://picsum.photos/1400/1300" className="w-full h-72 object-cover my-10" />
          <img src="https://picsum.photos/1100/1200" className="w-full h-96 object-cover my-10 mb-96" />
        </div>

        {activeTab === "userInfo" && (
          <LiquidGlass
              displacementScale={displacementScale}
              blurAmount={blurAmount}
              saturation={saturation}
              aberrationIntensity={aberrationIntensity}
              elasticity={elasticity}
              cornerRadius={cornerRadius}
              mouseContainer={containerRef}
              overLight={scrollingOverBrightSection || userInfoOverLight}
              mode={userInfoMode}
              dark={userInfoDark}
              style={{
                position: "fixed",
                top: "25%",
                left: "40%",
              }}
            >
              <div className="w-72 text-shadow-lg">
                <h3 className="text-xl font-semibold mb-4">用户信息</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-black/10 backdrop-blur rounded-full flex items-center justify-center text-white font-semibold">JD</div>
                    <div>
                      <p className="font-medium">张三</p>
                      <p className="text-sm text-white">软件工程师</p>
                    </div>
                  </div>
                  <div className="pt-2 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-white">邮箱：</span>
                      <span className="text-sm">john.doe@example.com</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-white">位置：</span>
                      <span className="text-sm">加利福尼亚，旧金山</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-white">加入时间：</span>
                      <span className="text-sm">2023 年 3 月</span>
                    </div>
                  </div>
                </div>
              </div>
            </LiquidGlass>
        )}

        {activeTab === "logOut" && (
          <LiquidGlass
            displacementScale={logoutDisplacementScale}
            blurAmount={logoutBlurAmount}
            saturation={logoutSaturation}
            aberrationIntensity={logoutAberrationIntensity}
            elasticity={logoutElasticity}
            cornerRadius={logoutCornerRadius}
            mouseContainer={containerRef}
            overLight={scrollingOverBrightSection || logoutOverLight}
            mode={logoutMode}
            dark={logoutDark}
            padding="8px 16px"
            onClick={() => {
              console.log("Logged out")
            }}
            style={{
              position: "fixed",
              top: "20%",
              left: "40%",
            }}
          >
            <h3 className="text-lg font-medium flex items-center gap-2">
              退出登录
              <LogOutIcon className="w-5 h-5" />
            </h3>
          </LiquidGlass>
        )}
      </div>

      {/* Right Panel - Control Panel */}
      <div className="row-start-2 rounded-t-3xl md:rounded-none md:col-start-3 bg-gray-900/80 h-full overflow-y-auto backdrop-blur-md border-l border-white/10 p-8 flex flex-col">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white">液态玻璃 React</h2>
            <a href="https://github.com/rdev/liquid-glass-react" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg" title="在 GitHub 上查看">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <p className="text-white/60 text-sm">React 液体玻璃容器效果组件。支持丰富的设置和视觉效果。</p>

          <p className="font-semibold text-yellow-300 text-xs mt-2 leading-snug">⚠️ 该效果在 Safari 和 Firefox 中不完全生效。在非 Chromium 内核浏览器中您将看不到边缘折射效果。</p>
        </div>

        {/* 标签切换器 */}
        <div className="flex mb-6 bg-white/5 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("userInfo")}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === "userInfo" ? "bg-blue-500 text-white shadow-lg" : "text-white/70 hover:text-white hover:bg-white/10"}`}
          >
            用户信息卡片
          </button>
          <button
            onClick={() => setActiveTab("logOut")}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === "logOut" ? "bg-blue-500 text-white shadow-lg" : "text-white/70 hover:text-white hover:bg-white/10"}`}
          >
            退出登录按钮
          </button>
        </div>

        <div className="space-y-8 flex-1">
          {activeTab === "userInfo" && (
            <>
              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">深色模式</span>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" id="userInfoDark" checked={userInfoDark} onChange={(e) => setUserInfoDark(e.target.checked)} className="w-5 h-5 accent-blue-500" />
                  <label htmlFor="userInfoDark" className="text-sm text-white/90">
                    启用 Apple 风格暗色液态玻璃
                  </label>
                </div>
                <p className="text-xs text-white/50 mt-2">应用带有顶部微光的深色玻璃外观</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">折射模式</span>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="userInfoModeStandard"
                      name="userInfoMode"
                      value="standard"
                      checked={userInfoMode === "standard"}
                      onChange={(e) => setUserInfoMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="userInfoModeStandard" className="text-sm text-white/90">
                      标准
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="userInfoModePolar"
                      name="userInfoMode"
                      value="polar"
                      checked={userInfoMode === "polar"}
                      onChange={(e) => setUserInfoMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="userInfoModePolar" className="text-sm text-white/90">
                      极坐标
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="userInfoModeProminent"
                      name="userInfoMode"
                      value="prominent"
                      checked={userInfoMode === "prominent"}
                      onChange={(e) => setUserInfoMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="userInfoModeProminent" className="text-sm text-white/90">
                      突出
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="userInfoModeShader"
                      name="userInfoMode"
                      value="shader"
                      checked={userInfoMode === "shader"}
                      onChange={(e) => setUserInfoMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="userInfoModeShader" className="text-sm text-white/90">
                      着色器（实验性）
                    </label>
                  </div>
                </div>
                <p className="text-xs text-white/50 mt-2">控制折射运算方式</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">位移缩放</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-blue-300">{displacementScale}</span>
                </div>
                <input type="range" min="0" max="200" step="1" value={displacementScale} onChange={(e) => setDisplacementScale(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">控制边缘扭曲的强度</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">模糊量</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-green-300">{blurAmount.toFixed(1)}</span>
                </div>
                <input type="range" min="0" max="1" step="0.01" value={blurAmount} onChange={(e) => setBlurAmount(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">控制背景模糊强度</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">饱和度</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-purple-300">{saturation}%</span>
                </div>
                <input type="range" min="100" max="300" step="10" value={saturation} onChange={(e) => setSaturation(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">控制背景色的饱和度</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">色差</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-cyan-300">{aberrationIntensity}</span>
                </div>
                <input type="range" min="0" max="20" step="1" value={aberrationIntensity} onChange={(e) => setAberrationIntensity(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">控制 RGB 通道分离的强度</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">弹性</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-orange-300">{elasticity.toFixed(2)}</span>
                </div>
                <input type="range" min="0" max="1" step="0.05" value={elasticity} onChange={(e) => setElasticity(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">控制玻璃向鼠标方向延展的幅度</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">圆角半径</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-pink-300">{cornerRadius === 999 ? "最大" : `${cornerRadius}px`}</span>
                </div>
                <input type="range" min="0" max="100" step="1" value={cornerRadius} onChange={(e) => setCornerRadius(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">控制玻璃圆角的弧度</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">高亮增强</span>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" id="userInfoOverLight" checked={userInfoOverLight} onChange={(e) => setUserInfoOverLight(e.target.checked)} className="w-5 h-5 accent-blue-500" />
                  <label htmlFor="userInfoOverLight" className="text-sm text-white/90">
                    将液态玻璃调暗（用于明亮背景）
                  </label>
                </div>
                <p className="text-xs text-white/50 mt-2">使玻璃更深暗，在浅色背景上更清晰可见</p>
              </div>
            </>
          )}

          {activeTab === "logOut" && (
            <>
              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">深色模式</span>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" id="logoutDark" checked={logoutDark} onChange={(e) => setLogoutDark(e.target.checked)} className="w-5 h-5 accent-blue-500" />
                  <label htmlFor="logoutDark" className="text-sm text-white/90">
                    启用 Apple 风格暗色液态玻璃
                  </label>
                </div>
                <p className="text-xs text-white/50 mt-2">应用带有顶部微光的深色玻璃外观</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">折射模式</span>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="logoutModeStandard"
                      name="logoutMode"
                      value="standard"
                      checked={logoutMode === "standard"}
                      onChange={(e) => setLogoutMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="logoutModeStandard" className="text-sm text-white/90">
                      标准
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="logoutModePolar"
                      name="logoutMode"
                      value="polar"
                      checked={logoutMode === "polar"}
                      onChange={(e) => setLogoutMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="logoutModePolar" className="text-sm text-white/90">
                      极坐标
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="logoutModeProminent"
                      name="logoutMode"
                      value="prominent"
                      checked={logoutMode === "prominent"}
                      onChange={(e) => setLogoutMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="logoutModeProminent" className="text-sm text-white/90">
                      突出
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <input
                      type="radio"
                      id="logoutModeShader"
                      name="logoutMode"
                      value="shader"
                      checked={logoutMode === "shader"}
                      onChange={(e) => setLogoutMode(e.target.value as "standard" | "polar" | "prominent" | "shader")}
                      className="w-4 h-4 accent-blue-500"
                    />
                    <label htmlFor="logoutModeShader" className="text-sm text-white/90">
                      着色器
                    </label>
                  </div>
                </div>
                <p className="text-xs text-white/50 mt-2">控制折射运算方式</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">位移缩放</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-blue-300">{logoutDisplacementScale}</span>
                </div>
                <input type="range" min="0" max="200" step="1" value={logoutDisplacementScale} onChange={(e) => setLogoutDisplacementScale(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">控制边缘扭曲的强度</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">模糊量</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-green-300">{logoutBlurAmount.toFixed(1)}</span>
                </div>
                <input type="range" min="0" max="1" step="0.01" value={logoutBlurAmount} onChange={(e) => setLogoutBlurAmount(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">控制背景模糊强度</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">饱和度</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-purple-300">{logoutSaturation}%</span>
                </div>
                <input type="range" min="100" max="300" step="10" value={logoutSaturation} onChange={(e) => setLogoutSaturation(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">控制背景色的饱和度</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">色差</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-cyan-300">{logoutAberrationIntensity}</span>
                </div>
                <input type="range" min="0" max="20" step="1" value={logoutAberrationIntensity} onChange={(e) => setLogoutAberrationIntensity(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">控制 RGB 通道分离的强度</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">弹性</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-orange-300">{logoutElasticity.toFixed(2)}</span>
                </div>
                <input type="range" min="0" max="1" step="0.05" value={logoutElasticity} onChange={(e) => setLogoutElasticity(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">控制玻璃向鼠标方向延展的幅度</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">圆角半径</span>
                <div className="mb-2">
                  <span className="text-xl font-mono text-pink-300">{logoutCornerRadius === 999 ? "最大" : `${logoutCornerRadius}px`}</span>
                </div>
                <input type="range" min="0" max="100" step="1" value={logoutCornerRadius} onChange={(e) => setLogoutCornerRadius(Number(e.target.value))} className="w-full" />
                <p className="text-xs text-white/50 mt-2">控制玻璃圆角的弧度</p>
              </div>

              <div>
                <span className="block text-sm font-semibold text-white/90 mb-3">高亮增强</span>
                <div className="flex items-center space-x-3">
                  <input type="checkbox" id="logoutOverLight" checked={logoutOverLight} onChange={(e) => setLogoutOverLight(e.target.checked)} className="w-5 h-5 accent-blue-500" />
                  <label htmlFor="logoutOverLight" className="text-sm text-white/90">
                    将液态玻璃调暗（用于明亮背景）
                  </label>
                </div>
                <p className="text-xs text-white/50 mt-2">使玻璃更深暗，在浅色背景上更清晰可见</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
