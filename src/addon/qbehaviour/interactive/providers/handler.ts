
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Injectable } from '@angular/core';
import { CoreQuestionBehaviourHandler } from '@core/question/providers/behaviour-delegate';
import { CoreQuestionHelperProvider } from '@core/question/providers/helper';

/**
 * Handler to support interactive question behaviour.
 */
@Injectable()
export class AddonQbehaviourInteractiveHandler implements CoreQuestionBehaviourHandler {
    name = 'AddonQbehaviourInteractive';
    type = 'interactive';

    constructor(private questionHelper: CoreQuestionHelperProvider) {
        // Nothing to do.
    }

    /**
     * Handle a question behaviour.
     * If the behaviour requires a submit button, it should add it to question.behaviourButtons.
     * If the behaviour requires to show some extra data, it should return the components to render it.
     *
     * @param {any} question The question.
     * @return {any[]|Promise<any[]>} Components (or promise resolved with components) to render some extra data in the question
     *                                (e.g. certainty options). Don't return anything if no extra data is required.
     */
    handleQuestion(question: any): any[] | Promise<any[]> {
        // Just extract the button, it doesn't need any specific component.
        this.questionHelper.extractQbehaviourButtons(question);

        return;
    }

    /**
     * Whether or not the handler is enabled on a site level.
     *
     * @return {boolean|Promise<boolean>} True or promise resolved with true if enabled.
     */
    isEnabled(): boolean | Promise<boolean> {
        return true;
    }
}
