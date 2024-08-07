<!-- prettier-ignore -->
<template>
  <div class="uic-body">
    <h1 class="uic-title">Form</h1>

    <h2 class="uic-title">Field</h2>

    <div class="uic-preview">
      <div class="field">
        <div class="input-text"><input type="text" placeholder="input text"/></div>
      </div>

      <div class="fields">
        <div class="field">
          <div class="input-text"><input type="text" placeholder="input text"/></div>
        </div>
        <div class="field">
          <div class="input-text"><input type="text" placeholder="input text"/></div>
        </div>
      </div>

      <div class="fields">
        <div class="field">
          <div class="input-text"><input type="text" placeholder="input text"/></div>
        </div>
        <div class="fields nowrap">
          <div class="field">
            <div class="input-text"><input type="text" placeholder="input text" /></div>
          </div>
          <div class="field col-auto">
            <label class="input-check">
              <input type="checkbox">
              <span class="label">checkbox</span>
            </label>
          </div>
          <div class="field col-auto">
            <button type="button" class="btn" data-type="">button</button>
          </div>
        </div>
      </div>
    </div>
    <UicCode>
      {{`
        <div class="field">
          ...
        </div>
        <div class="fields">
          <div class="field">...</div>
          <div class="fields">
            <div class="field">...</div>
            <div class="field">...</div>
          </div>
        </div>
      `}}
    </UicCode>



    <h2 class="uic-title">Inline</h2>

    <div class="uic-preview">
      <div class="field inline">
        <div class="input-text"><input type="text" placeholder="input text"/></div>
      </div>
      <div class="fields inline">
        <div class="field">
          <div class="input-text"><input type="text" placeholder="input text"/></div>
        </div>
        <div class="field">
          <div class="input-text"><input type="text" placeholder="input text" /></div>
        </div>
        <div class="field">
          <div class="input-text"><input type="text" placeholder="input text" /></div>
        </div>
      </div>
    </div>
    <UicCode>
      {{`
        <div class="field inline">
          ...
        </div>
        <div class="fields inline">
          ...
        </div>
      `}}
    </UicCode>

    <div class="uic-preview">
      <div class="fieldset inline">
        <div class="field">
          <div class="input-text"><input type="text" placeholder="input text"/></div>
        </div>
        <div class="fields">
          <div class="field">
            <div class="input-text"><input type="text" placeholder="input text"/></div>
          </div>
          <div class="fields nowrap">
            <div class="field">
              <div class="input-text"><input type="text" placeholder="input text" /></div>
            </div>
            <div class="field col-auto">
              <label class="input-check">
                <input type="checkbox">
                <span class="label">checkbox</span>
              </label>
            </div>
            <div class="field col-auto">
              <button type="button" class="btn" data-type="">button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <UicCode>
      {{`
        <div class="fieldset inline">
          <div class="field">
            ...
          </div>
          <div class="fields">
            ...
          </div>
        </div>
      `}}
    </UicCode>

    <h2 class="uic-title">Field Label</h2>
    <div class="uic-preview">
      <div class="field">
        <div class="field-label">field label</div>
        <div class="input-text"><input type="text" placeholder="input text" /></div>
      </div>
      <div class="fields">
        <div class="field-label">field label</div>
        <div class="field">
          <div class="input-text"><input type="text" placeholder="input text" /></div>
        </div>
        <div class="field">
          <div class="input-text"><input type="text" placeholder="input text" /></div>
        </div>
      </div>
      <div class="fields">
        <div class="field col-3">
          <div class="field-label">field label</div>
          <div class="input-text"><input type="text" placeholder="input text" /></div>
        </div>
        <div class="field col-3">
          <div class="field-label">field label</div>
          <div class="input-text"><input type="text" placeholder="input text" /></div>
        </div>
        <div class="field col-6">
          <div class="field-label">field label</div>
          <div class="fields nowrap">
            <div class="field">
              <div class="input-text"><input type="text" placeholder="input text" /></div>
            </div>
            <div class="field col-auto">
              <label class="input-check">
                <input type="checkbox">
                <span class="label">checkbox</span>
              </label>
            </div>
            <div class="field col-auto">
              <button type="button" class="btn" data-type="">button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <UicCode>
      {{`
        <div class="field">
          <div class="field-label">field label</div>
          ...
        </div>
        <div class="fields">
          <div class="field-label">field label</div>
          <div class="field">
            ...
          </div>
          <div class="field">
            ...
          </div>
        </div>
        <div class="fields">
          <div class="field col-3">
            <div class="field-label">field label</div>
            ...
          </div>
          <div class="field col-3">
            <div class="field-label">field label</div>
            ...
          </div>
          <div class="field col-6">
            <div class="field-label">field label</div>
            <div class="fields nowrap">
              <div class="field">
                ...
              </div>
              <div class="field col-auto">
                ...
              </div>
              <div class="field col-auto">
                ...
              </div>
            </div>
          </div>
        </div>
      `}}
    </UicCode>



    <h2 class="uic-title">Field Message</h2>
    <div class="uic-preview">
      <div class="field success">
        <div class="input-text"><input type="text" placeholder="input text"/></div>
      </div>
      <div class="field-msg success">Lorem ipsum dolor sit amet.</div>

      <div class="field error">
        <div class="input-text"><input type="text" placeholder="input text"/></div>
      </div>
      <div class="field-msg error">Lorem ipsum dolor sit amet.</div>

      <div class="field warning">
        <div class="input-text"><input type="text" placeholder="input text"/></div>
      </div>
      <div class="field-msg warning">Lorem ipsum dolor sit amet.</div>

      <div class="fields">
        <div class="field error">
          <div class="input-text"><input type="text" placeholder="input text"/></div>
        </div>
        <div class="field error">
          <div class="input-text"><input type="text" placeholder="input text" /></div>
        </div>
        <div class="field error">
          <div class="input-text"><input type="text" placeholder="input text" /></div>
        </div>
        <div class="field-msg error">Lorem ipsum dolor sit amet.</div>
      </div>
    </div>
    <UicCode>
      {{`
      <div class="field success">
        ...
      </div>
      <div class="field-msg success">Lorem ipsum dolor sit amet.</div>

      <div class="field error">
        ...
      </div>
      <div class="field-msg error">Lorem ipsum dolor sit amet.</div>

      <div class="field warning">
        ...
      </div>
      <div class="field-msg warning">Lorem ipsum dolor sit amet.</div>

      <div class="fields">
        <div class="field error">
          ...
        </div>
        <div class="field error">
          ...
        </div>
        <div class="field error">
          ...
        </div>
        <div class="field-msg error">Lorem ipsum dolor sit amet.</div>
      </div>
      `}}
    </UicCode>


    <h2 class="uic-title">Data Panel</h2>
    <div class="uic-preview">
      <div class="data-panel">
        <div class="panel-item">
          <div class="panel-header">Panel Header</div>
          <div class="panel-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, deleniti?
          </div>
        </div>
        <div class="panel-item">
          <div class="panel-header">Panel Header</div>
          <div class="panel-body">
            <div class="fields">
              <div class="field">
                <div class="input-text"><input type="text" placeholder="input text" /></div>
              </div>
              <div class="field">
                <div class="input-select">
                  <select>
                    <option>select</option>
                    <option>select111</option>
                    <option>select222</option>
                    <option>select333</option>
                    <option>select444</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-item row">
          <div class="panel-header">Panel Header</div>
          <div class="panel-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, est.
          </div>
        </div>
        <div class="panel-item row">
          <div class="panel-header">Panel Header</div>
          <div class="panel-body">
              <div class="fields">
                <div class="field">
                  <div class="input-text"><input type="text" placeholder="input text" /></div>
                </div>
                <div class="field col-auto">
                  <label class="input-check">
                    <input type="checkbox">
                    <span class="label">checkbox</span>
                  </label>
                </div>
                <div class="field col-auto">
                  <button type="button" class="btn" data-type="">button</button>
                </div>
              </div>
              <div class="fields inline">
                <div class="field">
                  <div class="input-text"><input type="text" placeholder="input text" /></div>
                </div>
                <div class="field">
                  <div class="input-select">
                    <select>
                      <option>select</option>
                      <option>select111</option>
                      <option>select222</option>
                      <option>select333</option>
                      <option>select444</option>
                    </select>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="panel-item row">
          <div class="panel-header">Panel Header</div>
          <div class="panel-body">
            <div class="input-checkgroup">
              <label class="input-check">
                <input type="checkbox">
                <span class="label">checkbox</span>
              </label>
              <label class="input-check">
                <input type="checkbox">
                <span class="label">checkbox</span>
              </label>
              <label class="input-check">
                <input type="checkbox">
                <span class="label">checkbox</span>
              </label>
            </div>
          </div>
        </div>
      </div>

    </div>
    <UicCode>
      {{`
      <div class="data-panel">
        <div class="panel-item">
          <div class="panel-header">Panel Header</div>
          <div class="panel-body">
            ...
          </div>
        </div>
        <div class="panel-item row">
          <div class="panel-header">Panel Header</div>
          <div class="panel-body">
            ...
          </div>
        </div>
      </div>
      `}}
    </UicCode>
  </div>
</template>

<script setup>
import UicCode from '@/components/UicCode.vue';
</script>

<style lang="scss" scoped></style>
